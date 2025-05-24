#' Set title for SveltePlots charts
#'
#' This function sets the title properties for SveltePlots charts, including text alignment, color, font size, font weight, and padding.
#'
#' @param sp The SveltePlots object to modify.
#' @param title The title text to be displayed.
#' @param text_align Text alignment of the title ("left", "center", "right"; default: "left").
#' @param color Color of the title text (default: "black").
#' @param font_size Font size of the title text (default: 16).
#' @param font_weight Font weight of the title text (default: "bold").
#' @param custom_css Some custom css for the title.
#' @returns An object of class \code{htmlwidget} representing the plot with an added title.
#' @export
sp_title <- function(sp, title = NULL, text_align = "left", color = "black", font_size = 16, font_weight = "bold", custom_css = "") {
  if (!is.null(title)) {
    sp$x$list_input[[1]]$header <- title
  }
  sp$x$list_input[[1]]$title_align <- text_align
  sp$x$list_input[[1]]$title_color <- color
  sp$x$list_input[[1]]$title_font_size <- font_size
  sp$x$list_input[[1]]$title_font_weight <- font_weight
  sp$x$list_input[[1]]$custom_css_header <- custom_css
  return(sp)
}



#' Create a tooltip for SveltePlots charts
#'
#' @description
#' This function creates a customizable tooltip for SveltePlots charts.
#' Tooltips provide additional information when hovering over data points.
#'
#' @param sp The SveltePlots object to attach the tooltip to.
#' @param type The type of tooltip, "shared" or "single". Default depends on the x-axis and is shared for date and factors and single for numeric.
#' @param format The format of tooltip content.
#' @param background_color Background color of the tooltip (default: "white").
#' @param opacity Numeric value between 0 and 1 specifying the opacity of the tooltip (default: 0.8).
#' @param text_color Text color of the tooltip (default: "black").
#' @param border_color Border color of the tooltip (default: "#cccccc").
#' @param border_width Border width of the tooltip (default: 1).
#' @param font_size Font size of the tooltip text (default: 12).
#' @param font_family Font family of the tooltip text (default: "Arial, sans-serif").
#' @param padding Padding around the tooltip content (default: 5).
#' @param position Position of the tooltip relative to the data point ("top", "bottom", "left", "right").
#' @param show_delay Delay in milliseconds before showing the tooltip (default: 0).
#' @param animation Whether to animate the tooltip (default: FALSE).
#' @param animation_params A list containing animation parameters for multiple series when type = "shared":
#'   \describe{
#'     \item{duration}{The duration of the animation in milliseconds. Default is 0.}
#'     \item{delay}{The delay before the animation starts in milliseconds. Default is 0.}
#'   }
#' @param justify_content How to justify the content inside the tooltip (default: "space-between").
#' @param cross_hair Whether to enable crosshair (default: FALSE).
#'
#' @returns A SveltePlots object with an attached tooltip.
#' @export
sp_tooltip <- function(
    sp,
    type = NULL,
    format = NULL,
    background_color = "white",
    opacity = 0.8,
    text_color = "black",
    border_color = NULL,
    border_width = 1,
    font_size = 12,
    font_family = "Arial, sans-serif",
    padding = 5,
    position = NULL, # can be "top", "bottom", "left", "right"
    show_delay = 0, # delay in milliseconds before showing tooltip
    animation = FALSE, # whether to animate the tooltip
    animation_params = NULL,
    justify_content = "space-between",
    cross_hair = FALSE) {
  if (!is.null(type)) {
    sp$x$list_input[[1]]$tooltip <- type
  }
  if (!is.null(format)) {
    sp$x$list_input[[1]]$format <- format
  }
  if (!is.null(format)) {
    sp$x$list_input[[1]]$border_color_tt <- border_color
  }
  if (!animation) {
    animation_params <- list(duration = 0, delay = 0)
  } else if (animation & is.null(animation_params)) {
    animation_params <- list(duration = 500, delay = 0)
  }
  sp$x$list_input[[1]]$background_color_tt <- background_color
  sp$x$list_input[[1]]$opacity_tt <- opacity
  sp$x$list_input[[1]]$text_color_tooltip <- text_color
  sp$x$list_input[[1]]$border_width_tt <- border_width
  sp$x$list_input[[1]]$font_size_tooltip <- font_size
  sp$x$list_input[[1]]$font_family_tt <- font_family
  sp$x$list_input[[1]]$padding_tooltip <- padding
  sp$x$list_input[[1]]$show_delay_tt <- show_delay
  sp$x$list_input[[1]]$enableAnimation <- animation
  sp$x$list_input[[1]]$justify_content_tooltip <- justify_content
  sp$x$list_input[[1]]$animation_params_list <- animation_params
  sp$x$list_input[[1]]$format <- format
  sp$x$list_input[[1]]$tooltip_position <- position
  sp$x$list_input[[1]]$crosshair <- cross_hair
  return(sp)
}
