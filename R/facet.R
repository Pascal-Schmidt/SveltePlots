#' Create Multiple Charts Based on a Faceting Variable
#'
#' This function creates multiple charts based on a specified faceting variable.
#'
#' @param sp A SveltePlot htmlwidget object.
#' @param ncol The number of columns in the facet grid. Default is NULL, which auto-calculates based on the number of rows.
#' @param nrow The number of rows in the facet grid. Default is NULL, which auto-calculates based on the number of columns.
#' @param scales A character string specifying whether scales are shared across all facets. Options are "fixed" (default) or "free".
#'
#' @details This function splits the data by the specified facet variable and creates multiple charts (facets) accordingly.
#' The function can automatically determine the number of rows and columns in the facet grid if not specified.
#'
#' @examples
#' library(SveltePlots)
#' data("penguins")
#' sp <- sp(
#'   data = penguins,
#'   mapping = spaes(x = flipper_length_mm, y = bill_length_mm, group = species),
#'   type = "points",
#'   facet_var = "sex"
#' ) |>
#'   SveltePlots::sp_facet(ncol = 2, scales = "free")
#' sp
#' @export
sp_facet <- function(sp, ncol = NULL, nrow = NULL, scales = "fixed") {

  dfs <- split(data.table::as.data.table(sp$x$list_input[[1]]$data), by = "facet_var")

  sp$x$list_input[[1]]$data <- NULL
  length_dfs <- length(dfs)
  if(is.null(ncol) & is.null(nrow)) {
    first <- floor(length_dfs/2)
    second <- length_dfs - first
    ncol <- first
    nrow <- second
  } else if(is.null(ncol)) {
    ncol <- length_dfs - nrow
  } else {
    nrow <- length_dfs - ncol
  }

  sp$x$list_input[[1]]$facet_col <- ncol
  sp$x$list_input[[1]]$facet_row <- nrow

  sp$x$list_input <- rep(list(sp$x$list_input[[1]]), length(dfs))
  for (i in seq_along(dfs)) {
    sp$x$list_input[[i]]$data <- dfs[[i]]
    sp$x$list_input[[i]]$id <- names(dfs)[[i]]
    sp$x$list_input[[i]]$header <- names(dfs)[[i]]
  }

  if(scales == "fixed") {
    temp <- data.table::rbindlist(do.call("rbind", dfs)[["data"]])
    if(sp$x$list_input[[1]]$x_axis_type == "factor") {
      x_range <- unique(temp$x)
    } else {
      x_range <- range(temp$x)
    }
    y_range <- range(temp$y)
    for (i in seq_along(dfs)) {
      sp$x$list_input[[i]]$x_range <- x_range
      sp$x$list_input[[i]]$y_range <- y_range
    }
  }

  return(sp)

}
