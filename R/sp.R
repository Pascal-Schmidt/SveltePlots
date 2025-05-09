#' Create Various Types of Plots
#'
#' This function allows for the creation of various types of plots including scatter plots, time-series plots,
#' line charts, bar charts, density plots, histograms, pie charts, and boxplots. It provides flexibility
#' through several arguments that control the appearance and behavior of the plots. The function is part of
#' the SveltePlots package which leverages the power of Svelte and D3 for rendering.
#'
#' @param data A data frame containing the data to be plotted.
#' @param mapping A list specifying the mapping of data to aesthetics, similar to ggplot2's \code{aes()} function.
#' This includes specifying x, y, and group attributes if needed.
#' @param type Character string specifying the type of plot to create. Accepted values are \code{points} (for scatter plots),
#' \code{line} (for line charts), \code{bar} (for bar charts), \code{histogram}, \code{density}, \code{pie}, and \code{boxplot}.
#' @param mode Specifies the mode for bar plots. Accepted values are \code{grouped}, \code{stacked}, and \code{percent},
#' determining how bars are arranged. Default is \code{grouped}.
#' @param size Numeric value specifying the size of the points or lines.
#' @param alpha Numeric value specifying the opacity of the points or lines, on a scale from 0 to 1.
#' @param tooltip Logical indicating whether tooltips should be shown on hover.
#' @param include_legend Logical indicating whether a legend should be included in the plot.
#' @param colors A vector of colors to be used for the different groups in the plot. If NULL, default colors are used.
#' @param height Numeric value specifying the height of the plot in pixels.
#' @param combine_same_groups Logical indicating whether multiple series with the same group should be combined
#' into one legend category.
#' @param breaks Controls the number of bins for histograms. Can be a vector or a method compatible with
#' the hist() function's breaks argument.
#' @param facet_var A character vector splitting the data for faceting charts
#'
#' @return A SveltePlots plot object which can be rendered in a web page or an R Markdown document.
#'
#' @examples
#' library(SveltePlots)
#'
#' data("penguins")
#' sp(
#'   data = penguins,
#'   mapping = spaes(x = flipper_length_mm, y = bill_length_mm, group = species),
#'   type = "points"
#' )
#'
#' @export
sp <- function(data, mapping, type, mode = "grouped", size = 2, alpha = 1, tooltip = TRUE, include_legend = TRUE, colors = NULL,
               height = 500, combine_same_groups = TRUE, breaks = "Sturges", facet_var = NULL) {
  create_configurations <- create_configurations()
  create_configurations$combine_same_groups <- combine_same_groups
  create_configurations$facet_var <- facet_var
  if ("custom_tooltip" %in% colnames(data)) {
    create_configurations$custom_tooltip_data <- TRUE
  }

  # determine plot type
  type <- ifelse(type == "scatter" | type == "points", "points", type)
  create_configurations$type <- type
  create_configurations$height <- height

  # determine the type of the x-axis and tooltips
  if (inherits(data[[as.character(mapping$x)]], c("numeric", "integer"))) {
    # define tooltip and axis class
    create_configurations$x_axis_type <- "numeric"
    create_configurations$tooltip <- "single"

    # x-axis format
    create_configurations$format_xaxis <- ",.3r"
  } else if (inherits(data[[as.character(mapping$x)]], c("Date", "POSIXct", "POSIXt"))) {
    # determine time-series interval
    create_configurations$time_series_interval <- time_series_interval(data[[as.character(mapping$x)]])

    # define tooltip and axis class
    create_configurations$x_axis_type <- "date"
    create_configurations$tooltip <- "vertical_line"

    # get date information
    temp <- date_class(data[[as.character(mapping$x)]])

    # x-axis format
    create_configurations$format_xaxis <- temp

    # date format for d3 to parse
    create_configurations$time_interval <- temp

    # get interval for time-series
    create_configurations$interval <- padr::get_interval(stats::na.omit(data[[as.character(mapping$x)]]))
  } else {
    # define tooltip and axis class
    create_configurations$x_axis_type <- "factor"
    create_configurations$tooltip <- "vertical_line"
  }

  create_configurations <- mutate_mapping(
    data, mapping, create_configurations, size, alpha, tooltip, colors, mode, include_legend, breaks, facet_var
  )

  return(SveltePlots(create_configurations))
}
