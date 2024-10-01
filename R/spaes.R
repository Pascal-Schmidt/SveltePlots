#' Create Aesthetic Mappings for SveltePlots
#'
#' @description
#' `spaes` creates a list of aesthetic mappings for use with SveltePlot charts. Similar to `aes` in `ggplot2` and `hcaes` in `highcharter`,
#' it defines how data should be mapped to visual properties such as position, size, and color. `spaes` mappings are used when creating or
#' adding series to plots, ensuring a consistent and expressive interface for defining the appearance of data in charts.
#'
#' @param x The x aesthetic mapping. This could be a column name from the data frame or any expression that evaluates to a numeric or categorical value,
#' corresponding to the x-axis position of the elements in the plot.
#' @param y The y aesthetic mapping. Similarly, this is used for mapping data to the y-axis position in the chart. It can be a direct column reference or
#' an expression.
#' @param ... Additional aesthetic mappings. These could include mappings for group, and y_min and y_max for confidence bands.
#' @return An object of class `spaes`, which is a list of unevaluated expressions that define how data is mapped to the visual properties of a chart.
#'
#' @examples
#' library(SveltePlots)
#'
#' sp(mtcars, spaes(x = disp, y = mpg, group = vs), type = "points")
#'
#' @export
spaes <- function(x, y, ...) {
  # taken from https://github.com/tidyverse/ggplot2/commit/d69762269787ed0799ab4fb1f35638cc46b5b7e6 and
  # from https://github.com/jbkunst/highcharter/blob/main/R/highcharts-api-add.R
  exprs <- rlang::enexprs(x = x, y = y, ...)

  is_missing <- vapply(exprs, rlang::is_missing, logical(1))

  mapping <- structure(exprs[!is_missing], class = "uneval")

  class(mapping) <- c("spaes", class(mapping))

  return(mapping)
}
