#' Add Segments or Rectangles to a SveltePlot Chart
#'
#' @description
#' Adds segments or rectangles to highlight specific areas or differences within a SveltePlot chart.
#' This function can be used to draw attention to certain data points, ranges, or to compare groups.
#'
#' @param sp A SveltePlot htmlwidget object to which segments or rectangles will be added.
#' @param x_start Vector of starting x positions for segments or rectangles. If the x-axis is numeric, this should be
#' a numeric vector; if the x-axis is date or time, this should be a character vector representing dates.
#' @param x_end Vector of ending x positions for segments or rectangles, similar in type to \code{x_start}.
#' @param y_start Vector of starting y positions for segments or rectangles. Can be numeric or "auto" to span the entire
#' y-axis range.
#' @param y_end Vector of ending y positions for segments or rectangles, similar in type to \code{y_start}.
#' @param type Character vector specifying the type of annotation to add: "lines" for line segments or "rect" for rectangles.
#' Default is "lines".
#' @param linetype Character vector specifying the appearance of the line if type is "lines". Supported values include
#' "blank", "solid", "dashed", "dotted", "dotdash", "longdash", and "twodash". Custom linetypes can also be defined as strings.
#' @param line_width Numeric vector specifying the width of lines if type is "lines". Default is 1.
#' @param opacity Numeric vector between 0 and 1 specifying the opacity of the lines or rectangles. Default is 0.5.
#' @param show_legend Logical indicating whether to include these segments or rectangles in the chart's legend. Default is TRUE.
#' @param background_color Character vector specifying the color(s) for the lines or rectangles. If NULL, a default color scheme is used.
#' @param legend_text Character vector specifying custom text for legend entries. Default is NULL, and no legend will be shown.
#' @param tooltip Character vector specifying tooltip text to be displayed on hover. Each segment or rectangle can have its
#' own tooltip text.
#' @param font_size Numeric vector specifying the font size of the tooltip text. Default is 12.
#' @param text_color Character vector specifying the color of the tooltip text. Default is "black".
#' @param x_position Vector of x positions for the tooltips. If NULL, defaults to \code{x_start}.
#' @param y_position Vector of y positions for the tooltips. Default is NULL.
#' @param outline_width Numeric vector specifying the width of the outline of the rectangles. Default is 1.
#' @param outline_color Character vector specifying the color of the outline of the rectangles. Default is "black".
#' @param key Character vector specifying keys for the segments or rectangles. Default assigns the keys from 1 to the number of rows in the data set. For more information see \href{https://learn.svelte.dev/tutorial/keyed-each-blocks}{Each keyed block}
#' @examples
#'
#' library(SveltePlots)
#' data("segments")
#' data("dau")
#' data("purchases")
#'
#' sp(
#'   data = purchases_age, type = "line",
#'   mapping = spaes(x = date, y = revenue_roll, group = age),
#'   colors = c("red", "green", "blue"),
#'   combine_same_groups = TRUE,
#'   height = 500
#' ) |>
#'   sp_add_series(
#'     data = purchases_age,
#'     mapping = spaes(x = date, y = revenue, group = age),
#'     type = "points",
#'     alpha = 0.4,
#'     tooltip = F,
#'     include_legend = F
#'   ) |>
#'   sp_add_series(
#'     data = purchases_age[purchases_age$revenue == max(purchases_age$revenue), ],
#'     mapping = spaes(x = date, y = revenue, group = age),
#'     type = "points",
#'     size = 5,
#'     tooltip = F
#'   ) |>
#'   sp_add_segments(
#'     x_start = "2000-01-12", x_end = "2000-01-17",
#'     y_start = "auto", y_end ="auto",
#'     type = "rect",
#'     opacity = 0.2,
#'     background_color = "black",
#'     text_color = "white",
#'     show_legend = TRUE,
#'     legend_text = "Highest Revenue Day",
#'     tooltip = "Revenue: <strong>$13179</strong>"
#'   ) |>
#'   sp_add_arrows(
#'     x_start = c("2000-03-01", "2000-03-01"), x_end = c("2000-01-15", "2000-01-15"),
#'     y_start = c(8000, 12000), y_end = c(10000, 13000),
#'     arrow_head = c(0, 0),
#'     size = c(200, 200),
#'     curvature = c(0.2, 0.4),
#'     direction = c("downward", "downward"),
#'     color = c("black", "black"),
#'     arrow_head_type = c("triangle", "triangle")
#'   ) |>
#'   sp_add_text(
#'     x = c("2000-02-01", "2000-02-20"),
#'     y = c(12500, 8500),
#'     text = c(
#'       "This was the highest revenue day",
#'       "Window of Some Event Happening"
#'     )
#'   )
#'
#'
#'
#'
#'
#'
#'
#'
#'
#'
#' sp <- sp(
#'   data = dau,
#'   type = "line",
#'   spaes(x = date, y = DAU),
#'   tooltip = FALSE
#' ) |>
#'   sp_add_series(
#'     data = dau,
#'     mapping = spaes(x = date, y = DAU),
#'     type = "points",
#'     size = 4,
#'     tooltip = TRUE,
#'   ) |>
#'   sp_add_segments(
#'     x_start = segments$start_date,
#'     x_end = segments$end_date,
#'     y_start = "even",
#'     y_end = "even",
#'     type = "rect",
#'     opacity = 0.2,
#'     background_color = segments$colors,
#'     text_color = "white",
#'     show_legend = TRUE,
#'     legend_text = segments$event_type,
#'     tooltip = unlist(segments$extra_details),
#'     key = segments$key
#'   ) |>
#'   sp_title("DAU", font_size = 24) |>
#'   sp_x_axis(rotation_axis_ticks = -30)
#'
#' sp

#' @export
sp_add_segments <- function(
    sp, x_start, x_end, y_start = "even", y_end = "even", type = "lines",
    linetype = "solid", line_width = 1, opacity = 0.2,
    show_legend = TRUE, background_color = NULL, legend_text = " ",
    tooltip = "", font_size = 12, text_color = "black",
    x_position = NULL, y_position = NULL, outline_width = 1, outline_color = "black", key = NULL
) {

  sp$x$list_input[[1]]$segments <- TRUE
  sp$x$list_input[[1]]$show_legend_segments <- show_legend
  if(is.null(background_color)) {
    n <- length(x_start)
    if(n == 1) {
      background_color <- "grey"
    } else {
      insert_colors <- RColorBrewer::brewer.pal(n = min(n, 12), name = "Set3")
      if(n == 2) {
        background_color <- insert_colors[1:2]
      } else if(n > 12) {
        n1 <- floor(n/12)
        n2 <- n %% 12
        background_color <- c(rep(insert_colors, n1), insert_colors[1:n2])
      }
    }
  }

  if(inherits(x_start, "Date")) {
    x_start <- as.character(x_start)
    x_end <- as.character(x_end)
  }

  if(is.null(sp$x$list_input[[1]]$add_segments_df)) {
    temp <- NULL
  } else {
    temp <- sp$x$list_input[[1]]$add_segments_df
  }

  if(is.null(x_position)) {
    x_position <- x_start
  }

  if(is.null(key)) {
    key <- 1:length(x_start)
  }

  sp$x$list_input[[1]]$add_segments_df <- temp |>
    dplyr::bind_rows(
      dplyr::tibble(
        x_start = x_start,
        x_end = x_end,
        y_start = y_start,
        y_end = y_end,
        type = type,
        linetype = linetype_to_svg(linetype),
        line_width = line_width,
        opacity = opacity,
        colors = background_color,
        legend_text = legend_text,
        tooltip = tooltip,
        font_size = font_size,
        text_color = text_color,
        y_position = y_position,
        x_position = x_position,
        outline_width = outline_width,
        outline_color = outline_color,
        key = key
      )
    )

  return(sp)

}

#' Add Text Annotations to a SveltePlot Chart
#'
#' @description
#' Adds text annotations at specified positions on a SveltePlot chart. This function can be used to label specific
#' parts of a chart, display values, or add any other textual information.
#'
#' @param sp A SveltePlot htmlwidget object to which text annotations will be added.
#' @param x Vector of x positions for the text annotations.
#' @param y Vector of y positions for the text annotations.
#' @param text Character vector of the text to be displayed as annotations.
#' @param color Character vector specifying the color(s) of the annotation text. Default is "black".
#' @param font_size Numeric vector specifying the size of the text. Default is 12.
#' @param text_anchor Character vector specifying the text alignment relative to its (\code{x}, \code{y}) position.
#' Valid options are "start", "middle", or "end".
#' @param style Optional CSS style string to apply to the text.
#' @examples
#' library(SveltePlots)
#' data("purchases")
#'
#' sp(
#'   data = purchases_age, type = "line",
#'   mapping = spaes(x = date, y = revenue_roll, group = age),
#'   colors = c("red", "green", "blue"),
#'   combine_same_groups = TRUE
#' ) |>
#'   sp_add_series(
#'     data = purchases_age,
#'     mapping = spaes(x = date, y = revenue, group = age),
#'     type = "points",
#'     alpha = 0.4,
#'     tooltip = F,
#'     include_legend = F
#'   ) |>
#'   sp_add_series(
#'     data = purchases_age[purchases_age$revenue == max(purchases_age$revenue), ],
#'     mapping = spaes(x = date, y = revenue, group = age),
#'     type = "points",
#'     size = 5,
#'     tooltip = F
#'   ) |>
#'   sp_add_segments(
#'     x_start = "2000-01-12", x_end = "2000-01-17",
#'     y_start = "auto", y_end ="auto",
#'     type = "rect",
#'     opacity = 0.2,
#'     background_color = "black",
#'     text_color = "white",
#'     show_legend = TRUE,
#'     legend_text = "Highest Revenue Day",
#'     tooltip = "Revenue: <strong>$13179</strong>"
#'   ) |>
#'   sp_add_arrows(
#'     x_start = c("2000-03-01", "2000-03-01"), x_end = c("2000-01-15", "2000-01-15"),
#'     y_start = c(8000, 12000), y_end = c(10000, 13000),
#'     arrow_head = c(0, 0),
#'     size = c(200, 200),
#'     curvature = c(0.2, 0.4),
#'     direction = c("downward", "downward"),
#'     color = c("black", "black"),
#'     arrow_head_type = c("triangle", "triangle")
#'   ) |>
#'   sp_add_text(
#'     x = c("2000-02-01", "2000-02-20"),
#'     y = c(12500, 8500),
#'     text = c(
#'       "This was the highest revenue day",
#'       "Window of Some Event Happening"
#'     )
#'   )
#' @export
sp_add_text <- function(
    sp, x, y, text, color = "black",
    font_size = 12, text_anchor = NULL, style = NULL
) {

  sp$x$list_input[[1]]$annotations <- TRUE

  if(is.null(sp$x$list_input[[1]]$add_annotations_df)) {
    temp <- NULL
  } else {
    temp <- sp$x$list_input[[1]]$add_annotations_df
  }
  sp$x$list_input[[1]]$add_annotations_df <- temp |>
    dplyr::bind_rows(
      dplyr::tibble(
        x = x,
        y = y,
        text = text,
        color = color,
        font_size = font_size,
        text_anchor = text_anchor,
        style = style
      )
    )

  return(sp)

}

#' Add Arrows to a SveltePlot Chart
#'
#' @description
#' Adds arrows to a SveltePlot chart to illustrate directions, trends, or to point out specific data points.
#' This function enhances the chart's ability to convey insights to the viewer.
#'
#' @param sp A SveltePlot htmlwidget object to which arrows will be added.
#' @param x_start Numeric vector specifying the starting x-coordinates of the arrows.
#' @param x_end Numeric vector specifying the ending x-coordinates of the arrows.
#' @param y_start Numeric vector specifying the starting y-coordinates of the arrows.
#' @param y_end Numeric vector specifying the ending y-coordinates of the arrows.
#' @param arrow_head_type Character vector specifying the type of arrow head. Can be customized to suit different visualization needs.
#' @param size Numeric vector specifying the size of the arrows.
#' @param color Character vector specifying the color of the arrows. Default is "black".
#' @param curvature Numeric vector specifying the curvature of the arrows. This is useful for creating curved arrows that can more naturally point between two points on the chart.
#' @param direction Character vector specifying the direction of the arrow. Valid options are "upward" or "downward". Default is "upward".
#' @param arrow_head Also not sure what it does.
#'
#'
#' @examples
#' library(SveltePlots)
#' data("purchases")
#'
#' sp(
#'   data = purchases_age, type = "line",
#'   mapping = spaes(x = date, y = revenue_roll, group = age),
#'   colors = c("red", "green", "blue"),
#'   combine_same_groups = TRUE
#' ) |>
#'   sp_add_series(
#'     data = purchases_age,
#'     mapping = spaes(x = date, y = revenue, group = age),
#'     type = "points",
#'     alpha = 0.4,
#'     tooltip = F,
#'     include_legend = F
#'   ) |>
#'   sp_add_series(
#'     data = purchases_age[purchases_age$revenue == max(purchases_age$revenue), ],
#'     mapping = spaes(x = date, y = revenue, group = age),
#'     type = "points",
#'     size = 5,
#'     tooltip = F
#'   ) |>
#'   sp_add_segments(
#'     x_start = "2000-01-12", x_end = "2000-01-17",
#'     y_start = "auto", y_end ="auto",
#'     type = "rect",
#'     opacity = 0.2,
#'     background_color = "black",
#'     text_color = "white",
#'     show_legend = TRUE,
#'     legend_text = "Highest Revenue Day",
#'     tooltip = "Revenue: <strong>$13179</strong>"
#'   ) |>
#'   sp_add_arrows(
#'     x_start = c("2000-03-01", "2000-03-01"), x_end = c("2000-01-15", "2000-01-15"),
#'     y_start = c(8000, 12000), y_end = c(10000, 13000),
#'     arrow_head = c(0, 0),
#'     size = c(200, 200),
#'     curvature = c(0.2, 0.4),
#'     direction = c("downward", "downward"),
#'     color = c("black", "black"),
#'     arrow_head_type = c("triangle", "triangle")
#'   ) |>
#'   sp_add_text(
#'     x = c("2000-02-01", "2000-02-20"),
#'     y = c(12500, 8500),
#'     text = c(
#'       "This was the highest revenue day",
#'       "Window of Some Event Happening"
#'     )
#'   )
#' @export
sp_add_arrows <- function(
    sp, x_start, x_end, y_start, y_end, arrow_head_type = NULL,
    size = NULL, color = "black", curvature = 0.00001, direction = "upward", arrow_head = NULL
) {

  sp$x$list_input[[1]]$arrows <- TRUE

  if(is.null(sp$x$list_input[[1]]$add_arrows_df)) {
    temp <- NULL
  } else {
    temp <- sp$x$list_input[[1]]$add_arrows_df
  }
  sp$x$list_input[[1]]$add_arrows_df <- temp |>
    dplyr::bind_rows(
      dplyr::tibble(
        x_start = x_start,
        x_end = x_end,
        y_start = y_start,
        y_end = y_end,
        size = size,
        color = color,
        arrow_head = arrow_head,
        curvature = curvature,
        direction = direction,
        arrowheadType = arrow_head_type
      )
    ) |>
    dplyr::mutate(id = dplyr::row_number())

  return(sp)
}
