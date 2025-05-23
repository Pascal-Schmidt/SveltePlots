% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/axis.R
\name{sp_x_axis}
\alias{sp_x_axis}
\title{Modify X-Axis of a SveltePlot Chart}
\usage{
sp_x_axis(
  sp,
  title = NULL,
  format = NULL,
  scale = "linear",
  ticks = 6,
  label = NULL,
  font_size_label = 14,
  font_size_ticks = 12,
  rotation_axis_ticks = 0,
  show_bar_labels = FALSE,
  position = "top",
  color_ticks = "black",
  color_label = "black",
  dx = 0,
  dy = 0,
  text_anchor = NULL,
  dominant_baseline = NULL,
  trigger = NULL,
  linetype = "solid"
)
}
\arguments{
\item{sp}{A SveltePlot htmlwidget object.}

\item{title}{Character string specifying the title of the x-axis. Default is NULL.}

\item{format}{Character string specifying the format of the x-axis labels. This should correspond to valid D3 format strings. Default is NULL. Documentation for the formats are here https://d3js.org/d3-format.}

\item{scale}{Character string indicating the scale type of the axis. Can be either "linear" or "log" for logarithmic. Default is "linear".}

\item{ticks}{Numeric value indicating the suggested number of tick marks. D3 will ultimately decide the exact number of ticks based on this suggestion. Default is 6.}

\item{label}{Character string for the label of the x-axis. Default is NULL.}

\item{font_size_label}{Numeric value specifying the font size of the x-axis label. Default is 14.}

\item{font_size_ticks}{Numeric value specifying the font size of the tick labels on the x-axis. Default is 12.}

\item{rotation_axis_ticks}{Numeric value indicating the rotation angle (in degrees) of the x-axis tick labels. Default is 0.}

\item{show_bar_labels}{Logical indicating whether to show labels on bars for bar charts. Default is FALSE.}

\item{position}{Character string specifying the position of bar labels. Can be either "top" or "middle". Default is "top".}

\item{color_ticks}{Character string specifying the color of the tick labels on the x-axis. Default is "black".}

\item{color_label}{Character string specifying the color of the x-axis label. Default is "black".}

\item{dx}{Numeric shift along the x-axis for the x-axis label positioning. Default is 0.}

\item{dy}{Numeric shift along the y-axis for the x-axis label positioning. Default is 0.}

\item{text_anchor}{Character string specifying the text-anchor attribute for the x-axis labels and ticks. Can be "start", "middle", or "end". Default is NULL.}

\item{dominant_baseline}{Character string specifying the dominant-baseline attribute for the x-axis labels and ticks. Default is NULL.}

\item{trigger}{Character string specifying the trigger type for tooltips. Can be "axis" or "single". Default is NULL and trigger is chosen based on x-axis type.}

\item{linetype}{Character string specifying the line type for the axis trigger. Can be "solid", "dashed", etc. Default is "solid".}
}
\value{
An object of class \code{htmlwidget} representing the plot with modified x-axis.
}
\description{
Modifies labels, scales, and appearance of the x-axis in a SveltePlot chart. This function allows for customization
of the x-axis, including label formatting, scale type (linear or logarithmic), tick marks, and more.
}
\examples{
library(SveltePlots)
sp(
  data = economics,
  mapping = spaes(x = date, y = unemploy),
  type = "line",
  tooltip = TRUE,
  colors = "red"
) |>
  sp_add_series(
    data = economics,
    mapping = spaes(x = date, y = pce),
    type = "line",
    tooltip = TRUE,
    colors = "green"
  ) |>
  sp_add_series(
    data = economics,
    mapping = spaes(x = date, y = psavert),
    type = "line",
    tooltip = FALSE,
    colors = "blue"
  ) |>
  sp_x_axis(
    format = "\%b \%Y",
    ticks = 4,
    label = "Date",
    font_size_label = 14,
    font_size_ticks = 12,
    rotation_axis_ticks = -30
  ) |>
  sp_y_axis(
    font_size_label = 14,
    font_size_ticks = 12
  )
}
