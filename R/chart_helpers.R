# Declare global variables to avoid R CMD check warnings
utils::globalVariables(c("x", "group", "y", "id", "y_start", "density", "opacity", "type", "fill", "hist", "counts", "x_start", "x_end", ".", "colors", "facet_var", "y_og"))

#' Internal: Mutate Mapping for Chart Data
#'
#' Prepares and modifies data mappings for SveltePlot chart rendering. This function is internally used
#' by the `sp()` function to handle data transformation based on chart type and aesthetic mappings.
#'
#' @param data Data frame to be processed.
#' @param mapping Aesthetic mappings created by `spaes()`.
#' @param create_configurations Function to create default configurations for charts.
#' @param size, alpha, tooltip Visual properties for the chart.
#' @param colors Custom colors for the chart, if specified.
#' @param mode Specific mode for bar charts ("stacked", "grouped", etc.).
#' @param include_legend Logical indicating whether to include a legend.
#' @param breaks Break points for histograms.
#' @return Modified chart configurations.
#' @keywords internal
mutate_mapping <- function(data, mapping, create_configurations, size, alpha, tooltip, colors = NULL, mode, include_legend, breaks, facet_var) {
  stopifnot("No data frame supplied" = is.data.frame(data), inherits(mapping, "spaes"))

  data_names <- stringr::str_remove_all(as.character(mapping), "\\`")
  svelte_names <- names(mapping)
  names_list <- stats::setNames(as.list(data_names), svelte_names)
  data <- data |> dplyr::select(!!!names_list, facet_var, dplyr::any_of("custom_tooltip"))

  if (create_configurations$type == "density") {
    names_list <- append(names_list, list(y = "Density"))
  } else if (create_configurations$type == "histogram") {
    names_list <- append(names_list, list(y = "Count"))
  }

  # add labels
  create_configurations$x_label <- names_list$x
  create_configurations$y_label <- names_list$y

  # if there is no grouping column yet add it with column name of y-axis
  if (!rlang::has_name(data, "group")) {
    data[["group"]] <- names_list$y
  }

  # time-series, scatter charts, line charts
  if (create_configurations$type %in% c("points", "line")) {
    create_configurations <- xy_chart(data, create_configurations, size, alpha, tooltip, colors, include_legend, facet_var)
  } else if (create_configurations$type == "bar") {
    create_configurations <- bar_chart(data, create_configurations, size, alpha, tooltip, colors, mode, include_legend, facet_var)
  } else if (create_configurations$type == "histogram") {
    create_configurations <- histogram(data, create_configurations, size, alpha, tooltip, colors, breaks, include_legend, facet_var)
  } else if (create_configurations$type == "density") {
    create_configurations <- density_chart(data, create_configurations, size, alpha, tooltip, colors, include_legend, facet_var)
  } else {
    stop(stringr::str_glue("Type {create_configurations$type} not valid"))
  }

  return(create_configurations)
}

#' Internal: Prepare Density Chart Data
#'
#' Transforms data for rendering density charts. This function is part of the internal mechanics
#' for data preparation in SveltePlot charts.
#'
#' @inheritParams mutate_mapping
#' @return Configuration list with modified data for density chart.
#' @keywords internal
density_chart <- function(data, create_configurations, size, alpha, tooltip, colors, include_legend, facet_var) {
  data <- data |>
    dplyr::group_by(group) |>
    dplyr::summarise(
      dens = list(density(x))
    ) |>
    dplyr::ungroup()

  # coerce group column into a factor
  if (!is.factor(data[["group"]])) {
    data <- dplyr::mutate(data, group = factor(group))
  }

  data <- data.table::data.table(
    x = unlist(lapply(data$dens, `[`, "x")),
    y = unlist(lapply(data$dens, `[`, "y")),
    group = sort(rep(data$group, 512))
  )

  color_mapping <- initial_color_mapping(data, colors, create_configurations)

  # create data structure with tibbles in column for each series/group
  data <- split(data, by = "group")
  data <- Filter(function(df) nrow(df) > 0, data)
  json_df <- dplyr::tibble()
  for (i in seq_along(data)) {
    json_df <- json_df |>
      dplyr::bind_rows(
        dplyr::tibble(
          id = names(data)[i],
          size = size,
          opacity = alpha,
          colors = unname(color_mapping[names(color_mapping) == names(data)[i]]),
          tooltip = tooltip,
          type = create_configurations$type,
          fill = unname(color_mapping[names(color_mapping) == names(data)[i]]),
          include_legend = include_legend,
          data = data[[i]] |>
            list()
        ) |>
          dplyr::mutate(id_id = paste0(id, size, opacity, colors, tooltip, type, fill))
      )
  }

  create_configurations$color_mapping <- tibble::deframe(json_df[, c("id", "colors")])
  create_configurations$id_id <- json_df$id_id
  create_configurations$color_mapping <- as.list(color_mapping)
  create_configurations$data <- json_df
  return(create_configurations)
}

#' Internal: Prepare XY Chart Data
#'
#' Processes data for XY charts including scatter and line charts. Used internally within the SveltePlot package.
#'
#' @inheritParams mutate_mapping
#' @param include_legend Whether to include legend in the chart.
#' @importFrom data.table :=
#' @return Configuration list with modified data for XY chart.
#' @keywords internal
xy_chart <- function(data, create_configurations, size, alpha, tooltip, colors, include_legend, facet_var) {
  # create data table
  data <- data.table::as.data.table(data)

  # coerce group column into a factor
  if (!is.factor(data[["group"]])) {
    data <- data[, group := factor(group)]
  }

  # if the x-axis is of type factor or dates, it needs to be ordered for svelte to plot it properly
  if (create_configurations$x_axis_type %in% c("factor", "date")) {
    data <- data.table::setorder(data, x, group)
  } else {
    data <- data.table::setorder(data, group)
  }

  color_mapping <- initial_color_mapping(data, colors, create_configurations)

  # create data structure with tibbles in column for each series/group
  data <- split(data, by = unique(c("group", facet_var)))
  data <- Filter(function(df) nrow(df) > 0, data)
  json_df <- dplyr::tibble()
  group_name <- sub("\\..*", "", names(data))
  facet <- if (is.null(facet_var)) {
    NULL
  } else {
    gsub("\\.", " ", sub("^[^.]*\\.", "", names(data)))
  }
  for (i in seq_along(data)) {
    json_df <- json_df |>
      dplyr::bind_rows(
        dplyr::tibble(
          id = group_name[[i]],
          size = size,
          opacity = alpha,
          second_axis = FALSE,
          facet_var = facet[[i]],
          colors = unname(color_mapping[names(color_mapping) == group_name[[i]]]),
          tooltip = tooltip,
          type = create_configurations$type,
          fill = "none",
          include_legend = include_legend,
          data = data[[i]] |>
            dplyr::mutate(
              x = if (inherits(data[[i]][["x"]], c("Date", "POSIXct", "POSIXt"))) {
                format(x, create_configurations$time_interval)
              } else if (inherits(data[[i]][["x"]], c("character", "factor"))) {
                as.character(x)
              } else {
                as.numeric(x)
              }
            ) |>
            list()
        ) |>
          dplyr::mutate(id_id = paste0(id, size, opacity, colors, tooltip, type, include_legend, facet_var))
      )
  }

  # if the x variable is a date type needs o be time-series for svelte to transform the date later
  if (inherits(data[[i]][["x"]], c("Date", "POSIXct", "POSIXt"))) {
    create_configurations$type <- "timeseries"
  }

  create_configurations$color_mapping <- tibble::deframe(json_df[, c("id", "colors")])
  create_configurations$id_id <- json_df$id_id
  create_configurations$color_mapping <- as.list(color_mapping)
  create_configurations$data <- json_df
  return(create_configurations)
}

#' Internal: Prepare Bar Chart Data
#'
#' Handles data preparation for bar charts with modes such as stacked or grouped.
#'
#' @inheritParams mutate_mapping
#' @param mode Bar chart mode ("stacked", "grouped", "percent").
#' @importFrom data.table :=
#' @return Configuration list with modified data for bar chart.
#' @keywords internal
bar_chart <- function(data, create_configurations, size, alpha, tooltip, colors, mode, include_legend, facet_var) {
  create_configurations$mode <- mode
  data <- data.table::as.data.table(data)

  if (!is.factor(data$x)) {
    data <- data[, x := factor(x, levels = unique(x))]
  }
  if (!is.factor(data$group)) {
    data <- data[, group := factor(group, levels = unique(group))]
  }

  data <- data[, y := as.numeric(y)]
  data <- data[, .(y = sum(y)), by = c("x", "group")]
  data <- data[, id := paste0(x, group)]
  data <- data.table::setorder(data, x, group)
  data$y_og <- data$y

  color_mapping <- initial_color_mapping(data, colors, create_configurations)

  if (mode == "stacked") {
    data <- data[, c("y", "y_start") := .(cumsum(y), data.table::shift(cumsum(y), fill = 0)), by = x]
  } else if (mode == "percent") {
    data <- data[, y := y / sum(y), by = "x"]
    data <- data[, c("y", "y_start") := .(cumsum(y), data.table::shift(cumsum(y), fill = 0)), by = x]
  } else {
    data <- data[, y_start := ifelse(y > 0, 0, y)]
    data <- data[, y := ifelse(y < 0, 0, y)]
  }

  create_configurations$color_mapping <- as.list(color_mapping)
  data <- data |>
    dplyr::inner_join(
      tibble::enframe(color_mapping, name = "group", value = "colors"),
      by = "group"
    )
  data$include_legend <- include_legend
  create_configurations$data <- data
  return(create_configurations)
}

#' Internal: Prepare Histogram Data
#'
#' Transforms and bins data for histogram chart rendering within the SveltePlot package.
#'
#' @inheritParams mutate_mapping
#' @importFrom data.table :=
#' @return Configuration list with modified data for histogram.
#' @keywords internal
histogram <- function(data, create_configurations, size, alpha, tooltip, colors, breaks, include_legend, facet_var) {
  data <- data |>
    dplyr::group_by(group) |>
    dplyr::summarise(
      hist = list(hist(x, plot = FALSE, breaks = breaks))
    ) |>
    dplyr::ungroup() |>
    dplyr::mutate(
      breaks = purrr::map(hist, `[`, "breaks"),
      counts = purrr::map(hist, `[`, "counts"),
      counts = purrr::map(counts, ~ unlist(.x)),
      x_start = purrr::map(breaks, ~ unlist(.x) %>% .[-length(.)]),
      x_end = purrr::map(breaks, ~ unlist(.x) %>% .[-1])
    ) |>
    dplyr::select(-c(hist, breaks)) |>
    tidyr::unnest(cols = c(counts, x_start, x_end)) |>
    dplyr::rename(y = counts) |>
    dplyr::mutate(opacity = alpha)

  data <- data.table::as.data.table(data)
  if (!is.factor(data$group)) {
    data <- data[, group := factor(group, levels = unique(group))]
  }

  data <- data.table::setorder(data, group)
  color_mapping <- initial_color_mapping(data, colors, create_configurations)

  create_configurations$color_mapping <- as.list(color_mapping)
  data <- data |>
    dplyr::inner_join(
      tibble::enframe(color_mapping, name = "group", value = "colors"),
      by = "group"
    ) |>
    dplyr::mutate(id = paste0(colors, x_start, x_end, group))

  create_configurations$data <- data
  return(create_configurations)
}
