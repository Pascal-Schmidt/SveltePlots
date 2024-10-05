#' Add Bar Series Data to the SveltePlots Chart
#'
#' This function adds series to a SveltePlot chart, updating the internal data structure.
#' It supports grouped and stacked bar charts with customization of colors and legend entries.
#'
#' @param sp A SveltePlot htmlwidget object to which the series will be added.
#' @param current_data The current data frame which contains the series.
#' @param color_mapping A named list mapping group names to colors.
#' @param group_name The names of the series.
#' @param include_legend A logical value indicating whether to include the data series in the legend.
#' @return Configuration list with modified data for the bar chart.
#' @keywords internal
add_bars <- function(sp, current_data, color_mapping, group_name, include_legend) {

  order_x <- unique(
    c(as.character(sp$x$list_input[[1]][["data"]][["x"]]), as.character(dplyr::bind_rows(current_data)[["x"]]))
    )

  order_group <- unique(
    c(as.character(sp$x$list_input[[1]][["data"]][["group"]]), as.character(dplyr::bind_rows(current_data)[["group"]]))
  )

  for (i in seq_along(current_data)) {
    current_data[[i]]$colors <- unname(color_mapping[names(color_mapping) == group_name[i]])[[1]]
    current_data[[i]]$include_legend <- include_legend
  }

  current_data <- dplyr::bind_rows(current_data)
  current_data <- current_data[, y := as.numeric(y)]
  current_data <- current_data[, y_og := as.numeric(y)]
  current_data <- current_data[, .(y = sum(y)), by = c("x", "group", "colors", "include_legend", "y_og")]
  current_data <- current_data[, id := paste0(x, group)]
  current_data <- dplyr::bind_rows(sp$x$list_input[[1]][["data"]], current_data)
  current_data <- current_data[, x := factor(x, levels = order_x)]
  current_data <- current_data[, group := factor(group, levels = order_group)]
  current_data <- data.table::setorder(current_data, x, group)
  print(current_data)

  if(sp$x$list_input[[1]][["mode"]] == "stacked") {
    current_data <- current_data[, c("y", "y_start") := .(cumsum(y_og), data.table::shift(cumsum(y_og), fill = 0)), by = x]
  } else if(sp$x$list_input[[1]][["mode"]] == "percent") {
    current_data <- current_data[, y := y/sum(y), by = "x"]
    current_data <- current_data[, c("y", "y_start") := .(cumsum(y_og), data.table::shift(cumsum(y_og), fill = 0)), by = x]
  } else {
    current_data <- current_data[, y_start := ifelse(y > 0, 0, y)]
    current_data <- current_data[, y := ifelse(y < 0, 0, y)]
  }

  sp$x$list_input[[1]][["data"]] <- current_data

  return(sp)

}

#' Add XY Data to Chart
#'
#' This function adds XY (scatter or line) data to a SveltePlot chart. It supports customization
#' of aesthetics such as color, size, opacity, and more. It is used to overlay data points, lines,
#' or other XY elements onto the chart.
#'
#' @param sp A SveltePlot htmlwidget object to which the data will be added.
#' @param current_data A list of data frames representing the XY data series.
#' @param group_name A character vector of group names corresponding to each data series.
#' @param color_mapping A named list mapping group names to colors.
#' @param size A numeric value specifying the size of the points or line thickness.
#' @param alpha A numeric value between 0 and 1 specifying the opacity of the series.
#' @param facet A list of facets, specifying how the data should be split across multiple panels.
#' @param tooltip A logical value indicating whether tooltips should be displayed on hover.
#' @param type A character string specifying the chart type ('line', 'points', etc.).
#' @param second_axis A logical value indicating if the series should be plotted on a secondary y-axis.
#' @param include_legend A logical value indicating whether to include the series in the chart legend.
#' @return Modified SveltePlot object with updated XY data.
#' @keywords internal
add_xy <- function(sp, current_data, group_name, color_mapping, size, alpha, facet, tooltip, type, second_axis, include_legend) {

  json_df <- dplyr::tibble()
  for (i in seq_along(current_data)) {
    json_df <- json_df %>%
      dplyr::bind_rows(
        dplyr::tibble(
          id = group_name[i],
          size = size,
          opacity = alpha,
          colors = unname(color_mapping[names(color_mapping) == group_name[i]]),
          facet_var = facet[[i]],
          tooltip = tooltip,
          type = type,
          second_axis = second_axis,
          include_legend = include_legend,
          fill = ifelse(type == "line" | type == "points", "none", unname(color_mapping[names(color_mapping) == group_name[i]])),
          data = current_data[[i]] %>%
            dplyr::mutate(
              x = if(inherits(current_data[[i]][["x"]], c("Date", "POSIXct", "POSIXt"))) {format(x, sp$x$list_input[[1]][["time_interval"]])} else if(inherits(current_data[[i]][["x"]], c("character", "factor"))) {as.character(x)} else {as.numeric(x)}
            ) %>%
            list()
        ) %>%
          dplyr::mutate(id_id = paste0(id, size, opacity, colors, tooltip, type, include_legend))
      )
  }

  if(sp$x$list_input[[1]][["combine_same_groups"]]) {
    data <- rbind(sp$x$list_input[[1]][["data"]], json_df)
    if("facet_var" %in% colnames(data)) {
      data <- data %>%
        dplyr::group_by(id, facet_var)
    } else {
      data <- data %>%
        dplyr::group_by(id)
    }
    data <- data %>%
      dplyr::mutate(
        include_legend = ifelse(dplyr::row_number() == 1, TRUE, FALSE)
      ) %>%
      dplyr::ungroup()
  } else {
    data <- rbind(sp$x$list_input[[1]][["data"]], json_df)
    data$id <- make.unique(as.character(data$id))
  }
  sp$x$list_input[[1]][["data"]] <- data

  return(sp)

}

#' Add Series to a SveltePlot Chart
#'
#' This function adds additional series to an existing SveltePlot chart. It supports adding
#' lines or points with customizable aesthetics such as color, size, and opacity. This is particularly
#' useful for layering multiple data sets on a single plot for comparison or highlighting relationships.
#'
#' @param sp A SveltePlot htmlwidget object to which the series will be added. This is typically the output
#' from a previous call to \code{\link{sp}} or \code{\link{sp_add_series}}.
#' @param data A data frame containing the data to be added as a series to the chart.
#' @param mapping A list of aesthetic mappings created by \code{\link{spaes}}. Each call to \code{sp_add_series}
#' requires its own set of mappings to correctly display the data.
#' @param type A character string specifying the type of series to add. Valid options are \code{"points"} for
#' scatter plots, \code{"line"} for line charts, or \code{"bands"} for confidence intervals or other purposes.
#' @param alpha A numeric value between 0 and 1 specifying the opacity of the series. Default is 1 (fully opaque).
#' @param size A positive numeric value determining the size of the points or thickness of the line. Default is 2.
#' @param colors A character vector of colors to use for the series. If \code{NULL} (the default), a default
#' color scheme is applied.
#' @param tooltip A logical value indicating whether tooltips should be shown on hover. Default is \code{TRUE}.
#' @param include_legend A logical value indicating whether a legend entry should be added for the series. Default is \code{TRUE}.
#' @param second_axis A logical value indicating if the series should be plotted on a secondary y-axis on the right side. Values will be scaled by default to the domain of the first y-axis.
#' @importFrom data.table :=
#' @importFrom magrittr %>%
#' @examples
#' library(SveltePlots)
#' library(dplyr)
#' library(lubridate)
#'
#' data("economics")
#' data("confidence_intervals")
#' data("purchases")
#'
#' sp(
#'   data = economics,
#'   type = "line",
#'   mapping = spaes(x = date, y = unemploy),
#'   colors = "red"
#' ) %>%
#'  sp_add_series(
#'   data = economics,
#'   mapping = spaes(x = date, y = pce),
#'   type = "line",
#'   colors = "green"
#'  ) %>%
#'  sp_add_series(
#'   data = economics,
#'   mapping = spaes(x = date, y = psavert),
#'   type = "line",
#'   colors = "blue"
#' )
#'
#' data("gapminder")
#'
#' gapminder <- gapminder %>%
#'   dplyr::mutate(
#'     country = as.character(country),
#'     year = lubridate::ymd(paste0(year, "-01-01"))
#'   )
#'
#' sp <- SveltePlots::sp(
#'   data = gapminder %>%
#'     dplyr::group_by(year, continent) %>%
#'     dplyr::summarise(
#'       lifeExp = mean(lifeExp)
#'     ) %>%
#'     dplyr::ungroup(),
#'   mapping = spaes(x = year, y = lifeExp, group = continent),
#'   type = "line",
#'   combine_same_groups = FALSE
#' ) %>%
#'   sp_add_series(
#'     data = gapminder %>%
#'       dplyr::filter(country == "Germany"),
#'     mapping = spaes(x = year, y = lifeExp, group = country),
#'     type = "line",
#'     colors = "gold"
#'   ) %>%
#'   sp_add_series(
#'     gapminder %>%
#'       dplyr::filter(country == "Chile"),
#'     mapping = spaes(x = year, y = lifeExp, group = country),
#'     type = "line",
#'     colors = "silver"
#'   ) %>%
#'   sp_add_series(
#'     gapminder %>%
#'       dplyr::filter(country == "Chile"),
#'     mapping = spaes(x = year, y = lifeExp, group = country),
#'     type = "points",
#'     size = 3,
#'     tooltip = FALSE
#'   )
#'
#' sp(
#'   data = purchases_age,
#'   mapping = spaes(x = adjusted_timestamp, y = revenue_roll, group = age),
#'   type = "line",
#'   colors = c("red", "green", "blue"),
#'   combine_same_groups = FALSE
#' ) %>%
#'   sp_add_series(
#'     data = purchases_age,
#'     mapping = spaes(x = adjusted_timestamp, y = revenue, group = age),
#'     type = "points",
#'     alpha = 0.4,
#'     tooltip = FALSE,
#'   ) %>%
#'   sp_add_series(
#'     data = purchases_age[purchases_age$revenue == max(purchases_age$revenue), ],
#'     mapping = spaes(x = adjusted_timestamp, y = revenue, group = age),
#'     type = "points",
#'     size = 5,
#'      tooltip = FALSE
#'   )
#' @export
sp_add_series <- function(sp, data, mapping, type, alpha = 1, size = 2, colors = NULL, tooltip = TRUE, include_legend = TRUE, second_axis = FALSE) {

  stopifnot("No data frame supplied" = is.data.frame(data), inherits(mapping, "spaes"))

  facet_var <- sp$x$list_input[[1]][["facet_var"]]
  data_names <- stringr::str_remove_all(as.character(mapping), "\\`")
  svelte_names <- names(mapping)
  names_list <- stats::setNames(as.list(data_names), svelte_names)
  current_data <- data %>% dplyr::select(!!!names_list, dplyr::any_of("custom_tooltip"), facet_var)

  # if there is no grouping column yet
  if(!rlang::has_name(current_data, "group")) {
    current_data[["group"]] <- names_list$y
  }

  current_data <- data.table::as.data.table(current_data)
  if(is.factor(current_data[["group"]])) {
    current_data <- data.table::setorder(current_data, group)
  } else if(!is.factor(current_data[["group"]])) {
    current_data <- current_data[, group := factor(group)]
    current_data <- data.table::setorder(current_data, group)
  }

  temp <- color_mapping(sp, current_data, colors)
  color_mapping <- temp[["color_mapping"]]
  sp <- temp[["sp"]]

  current_data <- split(current_data, by = c("group", facet_var))
  current_data <- Filter(function(df) nrow(df) > 0, current_data)
  group_name <- sub("\\..*", "", names(current_data))
  facet <- if(is.null(facet_var)) {NULL} else { gsub("\\.", " ", sub("^[^.]*\\.", "", names(current_data)))}

  if(type %in% c("points", "density", "scatter", "line", "bands")) {
    sp <- add_xy(sp, current_data, group_name, color_mapping, size, alpha, facet, tooltip, type, second_axis, include_legend)
  } else if(type == "bar") {
    sp <- add_bars(sp, current_data, color_mapping, group_name, include_legend)
  }

  return(sp)

}
