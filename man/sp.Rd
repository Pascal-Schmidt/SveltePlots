% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/sp.R
\name{sp}
\alias{sp}
\title{Create Various Types of Plots}
\usage{
sp(
  data,
  mapping,
  type,
  mode = "grouped",
  size = 2,
  alpha = 1,
  tooltip = TRUE,
  include_legend = TRUE,
  colors = NULL,
  height = 500,
  combine_same_groups = TRUE,
  breaks = "Sturges",
  facet_var = NULL
)
}
\arguments{
\item{data}{A data frame containing the data to be plotted.}

\item{mapping}{A list specifying the mapping of data to aesthetics, similar to ggplot2's \code{aes()} function.
This includes specifying x, y, and group attributes if needed.}

\item{type}{Character string specifying the type of plot to create. Accepted values are \code{points} (for scatter plots),
\code{line} (for line charts), \code{bar} (for bar charts), \code{histogram}, \code{density}, \code{pie}, and \code{boxplot}.}

\item{mode}{Specifies the mode for bar plots. Accepted values are \code{grouped}, \code{stacked}, and \code{percent},
determining how bars are arranged. Default is \code{grouped}.}

\item{size}{Numeric value specifying the size of the points or lines.}

\item{alpha}{Numeric value specifying the opacity of the points or lines, on a scale from 0 to 1.}

\item{tooltip}{Logical indicating whether tooltips should be shown on hover.}

\item{include_legend}{Logical indicating whether a legend should be included in the plot.}

\item{colors}{A vector of colors to be used for the different groups in the plot. If NULL, default colors are used.}

\item{height}{Numeric value specifying the height of the plot in pixels.}

\item{combine_same_groups}{Logical indicating whether multiple series with the same group should be combined
into one legend category.}

\item{breaks}{Controls the number of bins for histograms. Can be a vector or a method compatible with
the hist() function's breaks argument.}

\item{facet_var}{A character vector splitting the data for faceting charts}
}
\value{
A SveltePlots plot object which can be rendered in a web page or an R Markdown document.
}
\description{
This function allows for the creation of various types of plots including scatter plots, time-series plots,
line charts, bar charts, density plots, histograms, pie charts, and boxplots. It provides flexibility
through several arguments that control the appearance and behavior of the plots. The function is part of
the SveltePlots package which leverages the power of Svelte and D3 for rendering.
}
\examples{
library(SveltePlots)

data("penguins")
sp(
  data = penguins,
  mapping = spaes(x = flipper_length_mm, y = bill_length_mm, group = species),
  type = "points"
)

}
