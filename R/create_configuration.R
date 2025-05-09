#' Create Default Configuration for SveltePlot Charts
#'
#' Initializes a list of default configuration settings for SveltePlot charts for internal use.
#' It sets up parameters related to chart dimensions, appearance, axis properties, and more,
#' to prepare for rendering. This function is not intended for direct use by API consumers.
#'
#' @param id Unique identifier for the chart.
#' @param data Data frame containing the data to be plotted.
#' @param header Chart title or header text.
#' @param height Height of the chart in pixels.
#' @param show_legend Logical; if TRUE, displays the chart legend.
#'
#' @param xaxis_ticks Suggested number of ticks on the x-axis.
#' @param dx Horizontal shift for the x-axis labels, typically in em units.
#' @param dy Vertical shift for the x-axis labels, typically in em units.
#' @param rotation_xaxis Rotation angle for x-axis tick labels, in degrees.
#' @param font_size_xaxis Font size for the x-axis label.
#' @param font_size_xticks Font size for the x-axis tick labels.
#' @param scale_x Scale type for the x-axis ("linear" or "log").
#' @param dominant_baseline_x_axis Dominant baseline for x-axis labels.
#' @param text_anchor_x_axis Text anchor point for x-axis labels.
#' @param x_axis_type Type of x-axis, if applicable (e.g., "date").
#' @param x_label Label for the x-axis.
#' @param format_xaxis Format string for x-axis labels, following D3 format specifications.
#'
#' @param format_yaxis Format string for y-axis labels, following D3 format specifications.
#' @param yaxis_ticks Suggested number of ticks on the y-axis.
#' @param font_size_yaxis Font size for the y-axis label.
#' @param font_size_yticks Font size for the y-axis tick labels.
#' @param format_tooltip Tooltip format string, following D3 format specifications.
#' @param y_label Label for the y-axis.
#' @param tooltip Configuration for tooltips, if specified.
#' @param interval Numeric; interval for the plotting, if applicable.
#' @param time_interval Time interval for the x-axis, if using time series data.
#' @param colors Vector of colors to use for the chart elements.
#'
#' @return A list of configurations for a SveltePlot chart.
#'
#' @examples
#' \dontrun{
#' # This function is typically used internally within the SveltePlots package
#' # and not intended for direct use in scripts or applications.
#' }
#' @keywords internal
create_configurations <- function(
    id = "",
    data = NULL,
    header = "",
    height = 500,
    show_legend = TRUE,
    ##################
    ### axis props ###
    #################
    ### x-axis ###
    xaxis_ticks = 6,
    dx = "0em",
    dy = "0em",
    rotation_xaxis = 0,
    font_size_xaxis = 14,
    font_size_xticks = 12,
    scale_x = "linear",
    dominant_baseline_x_axis = "middle",
    text_anchor_x_axis = "middle",
    x_axis_type = NULL,
    x_label = NULL,
    format_xaxis = NULL,
    ### y-axis ###
    format_yaxis = ",.3r",
    yaxis_ticks = 6,
    font_size_yaxis = 14,
    font_size_yticks = 12,
    format_tooltip = ".2~f",
    y_label = NULL,
    tooltip = NULL,
    interval = NULL,
    time_interval = NULL,
    colors = c("#1F77B4", "#FF7F0E", "#2CA02C", "#D62728", "#9467BD", "#8C564B", "#E377C2", "#7F7F7F", "#BCBD22", "#17BECF")) {
  default_list <- list(
    id = id,
    data = data,
    header = header,
    height = height,
    show_legend = show_legend,

    ##################
    ### axis props ###
    #################

    ### x-axis ###
    xaxis_ticks = xaxis_ticks,
    dx = dx,
    dy = dy,
    rotation_xaxis = rotation_xaxis,
    font_size_xaxis = font_size_xaxis,
    font_size_xticks = font_size_xticks,
    scale_x = scale_x,
    dominant_baseline_x_axis = dominant_baseline_x_axis,
    text_anchor_x_axis = text_anchor_x_axis,
    x_axis_type = x_axis_type,
    x_label = x_label,
    format_xaxis = format_xaxis,

    ### y-axis ###
    font_size_yaxis = font_size_yaxis,
    font_size_yticks = font_size_yticks,
    format_yaxis = format_yaxis,
    yaxis_ticks = yaxis_ticks,
    format_tooltip = format_tooltip,
    y_label = y_label,
    tooltip = tooltip,
    interval = interval,
    time_interval = time_interval,
    colors = colors
  )

  return(default_list)
}
