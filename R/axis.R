#' Modify X-Axis of a SveltePlot Chart
#'
#' @description
#' Modifies labels, scales, and appearance of the x-axis in a SveltePlot chart. This function allows for customization
#' of the x-axis, including label formatting, scale type (linear or logarithmic), tick marks, and more.
#'
#' @param sp A SveltePlot htmlwidget object.
#' @param title Character string specifying the title of the x-axis. Default is NULL.
#' @param format Character string specifying the format of the x-axis labels. This should correspond to valid D3 format strings. Default is NULL. Documentation for the formats are here https://d3js.org/d3-format.
#' @param scale Character string indicating the scale type of the axis. Can be either "linear" or "log" for logarithmic. Default is "linear".
#' @param ticks Numeric value indicating the suggested number of tick marks. D3 will ultimately decide the exact number of ticks based on this suggestion. Default is 6.
#' @param label Character string for the label of the x-axis. Default is NULL.
#' @param font_size_label Numeric value specifying the font size of the x-axis label. Default is 14.
#' @param font_size_ticks Numeric value specifying the font size of the tick labels on the x-axis. Default is 12.
#' @param rotation_axis_ticks Numeric value indicating the rotation angle (in degrees) of the x-axis tick labels. Default is 0.
#' @param show_bar_labels Logical indicating whether to show labels on bars for bar charts. Default is FALSE.
#' @param position Character string specifying the position of bar labels. Can be either "top" or "middle". Default is "top".
#' @param color_ticks Character string specifying the color of the tick labels on the x-axis. Default is "black".
#' @param color_label Character string specifying the color of the x-axis label. Default is "black".
#' @param dx Numeric shift along the x-axis for the x-axis label positioning. Default is 0.
#' @param dy Numeric shift along the y-axis for the x-axis label positioning. Default is 0.
#' @param text_anchor Character string specifying the text-anchor attribute for the x-axis labels and ticks. Can be "start", "middle", or "end". Default is NULL.
#' @param dominant_baseline Character string specifying the dominant-baseline attribute for the x-axis labels and ticks. Default is NULL.
#' @param trigger Character string specifying the trigger type for tooltips. Can be "axis" or "single". Default is NULL and trigger is chosen based on x-axis type.
#' @param linetype Character string specifying the line type for the axis trigger. Can be "solid", "dashed", etc. Default is "solid".
#'
#'
#' @examples
#' library(SveltePlots)
#' sp(
#'   data = economics,
#'   mapping = spaes(x = date, y = unemploy),
#'   type = "line",
#'   tooltip = TRUE,
#'   colors = "red"
#' ) |>
#'   sp_add_series(
#'     data = economics,
#'     mapping = spaes(x = date, y = pce),
#'     type = "line",
#'     tooltip = TRUE,
#'     colors = "green"
#'   ) |>
#'   sp_add_series(
#'     data = economics,
#'     mapping = spaes(x = date, y = psavert),
#'     type = "line",
#'     tooltip = FALSE,
#'     colors = "blue"
#'   ) |>
#'   sp_x_axis(
#'     format = "%b %Y",
#'     ticks = 4,
#'     label = "Date",
#'     font_size_label = 14,
#'     font_size_ticks = 12,
#'     rotation_axis_ticks = -30
#'   ) |>
#'   sp_y_axis(
#'     font_size_label = 14,
#'     font_size_ticks = 12
#'   )

#' @export
sp_x_axis <- function(
    sp, title = NULL, format = NULL, scale = "linear", ticks = 6, label = NULL,
    font_size_label = 14, font_size_ticks = 12, rotation_axis_ticks = 0,
    show_bar_labels = FALSE, position = "top", color_ticks = "black", color_label = "black",
    dx = 0, dy = 0, text_anchor = NULL, dominant_baseline = NULL, trigger = NULL, linetype = "solid"
) {

  if(!is.null(format)) {
    sp$x$list_input[[1]][["format_xaxis"]] <- format
  }
  if(!is.null(label)) {
    sp$x$list_input[[1]][["x_label"]] <- label
  }

  if(is.null(text_anchor)) {
    if(rotation_axis_ticks == 0) {
      sp$x$list_input[[1]][["text_anchor_x_axis"]] <- "middle"
      sp$x$list_input[[1]][["dominant_baseline_x_axis"]] <- "middle"
    } else if(rotation_axis_ticks > 0) {
      sp$x$list_input[[1]][["text_anchor_x_axis"]] <- "end"
      sp$x$list_input[[1]][["dominant_baseline_x_axis"]] <- "end"
    } else {
      sp$x$list_input[[1]][["text_anchor_x_axis"]] <- "start"
      sp$x$list_input[[1]][["dominant_baseline_x_axis"]] <- "start"
    }
  } else {
    sp$x$list_input[[1]][["text_anchor_x_axis"]] <- text_anchor
    sp$x$list_input[[1]][["dominant_baseline_x_axis"]] <- dominant_baseline
  }

  if(!is.null(trigger)) {
    if(trigger == "axis") {
      sp$x$list_input[[1]][["tooltip"]] <- "vertical_line"
      sp$x$list_input[[1]][["line_type_axis_trigger"]] <- linetype_to_svg(linetype)
    } else if(trigger == "single") {
      sp$x$list_input[[1]][["tooltip"]] <- "single"
    }
  }

  if(!is.null(title)) {
    sp$x$list_input[[1]][["x_label"]] <- title
    sp$x$list_input[[1]][["font_size_xaxis"]] <- font_size_label
  } else {
    sp$x$list_input[[1]][["font_size_xaxis"]] <- 0
  }

  sp$x$list_input[[1]][["scale_x"]] <- scale
  sp$x$list_input[[1]][["xaxis_ticks"]] <- ticks
  sp$x$list_input[[1]][["font_size_xticks"]] <- font_size_ticks
  sp$x$list_input[[1]][["rotation_xaxis"]] <- rotation_axis_ticks
  sp$x$list_input[[1]][["show_bar_labels"]] <- show_bar_labels
  sp$x$list_input[[1]][["position"]] <- position
  sp$x$list_input[[1]][["color_ticks_x"]] <- color_ticks
  sp$x$list_input[[1]][["color_label_x"]] <- color_label
  sp$x$list_input[[1]][["dx"]] <- dx
  sp$x$list_input[[1]][["dy"]] <- dy

  return(sp)
}


#' Modify Y-Axis of a SveltePlot Chart
#'
#' @description
#' Similar to \code{\link{sp_x_axis}}, but for the y-axis. This function customizes the appearance and scaling of the y-axis,
#' including label formatting, tick marks, and label and tick colors.
#'
#' @inheritParams sp_x_axis
#' @examples
#' \dontrun{
#' library(SveltePlots)
#' # Assume `economics` data and prior `sp` and `sp_x_axis` calls
#' sp(...) |>
#'   sp_y_axis(label = "Unemployment", font_size_label = 18, font_size_ticks = 14)
#' }
#' @export
sp_y_axis <- function(
    sp, format = NULL, scale = "linear", ticks = 6, label = NULL,
    font_size_label = 14, font_size_ticks = 12, color_ticks = "black", color_label = "black"
) {

  if(!is.null(format)) {
    sp$x$list_input[[1]][["format_yaxis"]] <- format
  }

  if(!is.null(label)) {
    sp$x$list_input[[1]][["y_label"]] <- label
  }

  sp$x$list_input[[1]][["scale_y"]] <- scale
  sp$x$list_input[[1]][["yaxis_ticks"]] <- ticks
  sp$x$list_input[[1]][["font_size_yaxis"]] <- font_size_label
  sp$x$list_input[[1]][["font_size_yticks"]] <- font_size_ticks
  sp$x$list_input[[1]][["color_ticks_y"]] <- color_ticks
  sp$x$list_input[[1]][["color_label_y"]] <- color_label

  return(sp)

}
