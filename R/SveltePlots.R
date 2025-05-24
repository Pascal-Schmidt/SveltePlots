#' Chart Specification
#'
#' @param list_input This is a list inside a list or a list of lists which contain the chart specifications used by Svelte to generate the chart.
#' @keywords internal
SveltePlots <- function(list_input) {
  # forward options using x
  x <- list(
    list_input = list(list_input)
  )

  attr(x, "TOJSON_ARGS") <- list(dataframe = "rows")

  # create widget
  sp <- htmlwidgets::createWidget(
    name = "SveltePlots",
    x,
    sizingPolicy = htmlwidgets::sizingPolicy(
      defaultWidth = "100%",
      defaultHeight = 800,
      browser.fill = TRUE,
      padding = 10
    ),
    package = "SveltePlots"
  )

  return(sp)
}
#' Shiny bindings for SveltePlots
#'
#' Output and render functions for using SveltePlots within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a AgeGroupFacet
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#' @returns No return value. Called for side effects in a 'shiny' app context.
#' @name SveltePlots-shiny
#'
#' @export
SveltePlotsOutput <- function(outputId, width = "100%", height = "400px") {
  htmlwidgets::shinyWidgetOutput(outputId, "SveltePlots", width, height, package = "SveltePlots")
}

#' @rdname SveltePlots-shiny
#' @returns No return value. Called for side effects in a 'shiny' app context.
#' @export
renderSveltePlots <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) {
    expr <- substitute(expr)
  } # force quoted
  htmlwidgets::shinyRenderWidget(expr, SveltePlotsOutput, env, quoted = TRUE)
}
