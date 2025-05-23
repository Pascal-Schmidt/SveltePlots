% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/annotations.R
\name{sp_add_text}
\alias{sp_add_text}
\title{Add Text Annotations to a SveltePlot Chart}
\usage{
sp_add_text(
  sp,
  x,
  y,
  text,
  color = "black",
  font_size = 12,
  text_anchor = NULL,
  style = NULL
)
}
\arguments{
\item{sp}{A SveltePlot htmlwidget object to which text annotations will be added.}

\item{x}{Vector of x positions for the text annotations.}

\item{y}{Vector of y positions for the text annotations.}

\item{text}{Character vector of the text to be displayed as annotations.}

\item{color}{Character vector specifying the color(s) of the annotation text. Default is "black".}

\item{font_size}{Numeric vector specifying the size of the text. Default is 12.}

\item{text_anchor}{Character vector specifying the text alignment relative to its (\code{x}, \code{y}) position.
Valid options are "start", "middle", or "end".}

\item{style}{Optional CSS style string to apply to the text.}
}
\value{
An object of class \code{htmlwidget} representing the plot with text annotations.
}
\description{
Adds text annotations at specified positions on a SveltePlot chart. This function can be used to label specific
parts of a chart, display values, or add any other textual information.
}
\examples{
library(SveltePlots)
data("purchases")

sp(
  data = purchases, type = "line",
  mapping = spaes(x = date, y = revenue_roll, group = age),
  colors = c("red", "green", "blue"),
  combine_same_groups = TRUE
) |>
  sp_add_series(
    data = purchases,
    mapping = spaes(x = date, y = revenue, group = age),
    type = "points",
    alpha = 0.4,
    tooltip = FALSE,
    include_legend = FALSE
  ) |>
  sp_add_series(
    data = purchases[purchases$revenue == max(purchases$revenue), ],
    mapping = spaes(x = date, y = revenue, group = age),
    type = "points",
    size = 5,
    tooltip = FALSE
  ) |>
  sp_add_segments(
    x_start = "2000-01-12", x_end = "2000-01-17",
    y_start = "auto", y_end = "auto",
    type = "rect",
    opacity = 0.2,
    background_color = "black",
    text_color = "white",
    show_legend = TRUE,
    legend_text = "Highest Revenue Day",
    tooltip = "Revenue: <strong>$13179</strong>"
  ) |>
  sp_add_arrows(
    x_start = c("2000-03-01", "2000-03-01"), x_end = c("2000-01-15", "2000-01-15"),
    y_start = c(8000, 12000), y_end = c(10000, 13000),
    arrow_head = c(0, 0),
    size = c(200, 200),
    curvature = c(0.2, 0.4),
    direction = c("downward", "downward"),
    color = c("black", "black"),
    arrow_head_type = c("triangle", "triangle")
  ) |>
  sp_add_text(
    x = c("2000-02-01", "2000-02-20"),
    y = c(12500, 8500),
    text = c(
      "This was the highest revenue day",
      "Window of Some Event Happening"
    )
  )
}
