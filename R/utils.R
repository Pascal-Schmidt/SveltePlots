# https://stackoverflow.com/questions/26064292/guess-formats-r-lubridate
date_class <- function(x) {
  x <- stats::na.omit(x)
  if (class(x[1])[1] %in% c("POSIXct", "POSIXt")) {
    time_format <- "%Y-%m-%d %H:%M:%S"
  } else {
    time_format <- "%Y-%m-%d"
  }
  return(time_format)
}

time_series_interval <- function(dates) {
  diffs <- base::as.numeric(base::diff(base::as.POSIXct(dates)))
  median_diff <- stats::median(diffs, na.rm = TRUE)

  if (median_diff < 86400) {
    return("hourly")
  } else if (median_diff < 7 * 86400) {
    return("daily")
  } else if (median_diff < 31 * 86400) {
    return("weekly")
  } else if (median_diff < 365 * 86400) {
    return("monthly")
  } else {
    return("yearly")
  }
}


linetype_to_svg <- function(linetype) {
  linetypes <- list(
    "blank" = "",
    "solid" = "none",
    "dashed" = "6,2",
    "dotted" = "2,2",
    "dotdash" = "1,3,3,3",
    "longdash" = "8,2",
    "twodash" = "4,2,2,2"
  )
  if (!linetype %in% names(linetypes)) {
    linetypes[[linetype]] <- linetype
  }

  return(linetypes[[linetype]])
}

color_mapping <- function(sp, current_data, colors) {
  # if colors provided, check if enough colors are present
  if (!is.null(colors)) {
    # get unique groups and number of groups
    length_unique_groups <- base::nlevels(current_data[["group"]])

    if (length_unique_groups > base::length(colors)) {
      stop(
        stringr::str_glue(
          "Only {length(colors)} colors provided but {length_unique_groups} unique levels in group present. Please add more colors or consider dropping levels."
        )
      )
    }
    color_mapping <- colors
    names(color_mapping) <- base::levels(current_data[["group"]])
    sp$x$list_input[[1]]$color_mapping <- base::append(sp$x$list_input[[1]]$color_mapping, as.list(color_mapping))
  } else {
    color_mapping <- sp$x$list_input[[1]]$color_mapping
    groups <- base::levels(current_data[["group"]])
    missing_colors <- groups[!(groups %in% names(color_mapping))]
    # if(base::length(missing_colors) == 1) {
    #   colors <- "black"
    #   names(colors) <- missing_colors
    #   color_mapping <- append(color_mapping, as.list(colors))
    # } else if(base::length(missing_colors) > 1) {
    if (base::length(missing_colors) >= 1) {
      colors <- sp$x$list_input[[1]]$colors
      add_colors <- colors[!(colors %in% color_mapping)]
      if (base::length(add_colors) < base::length(missing_colors)) {
        repeated_colors <- base::length(missing_colors) - base::length(add_colors)
        if (repeated_colors > 9) {
          n1 <- floor(length_unique_groups / 9)
          n2 <- length_unique_groups %% 9
          add_colors <- c(add_colors, rep(colors, n1), colors[1:n2])
        } else {
          add_colors <- c(add_colors, colors[1:repeated_colors])
        }
      } else {
        add_colors <- add_colors[1:length(missing_colors)]
        names(add_colors) <- missing_colors
      }
      color_mapping <- base::append(color_mapping, as.list(add_colors))
    } else {
      return(
        list(
          sp = sp,
          color_mapping = color_mapping
        )
      )
    }
    sp$x$list_input[[1]]$color_mapping <- base::append(sp$x$list_input[[1]]$color_mapping, as.list(color_mapping))
  }

  return(
    list(
      sp = sp,
      color_mapping = color_mapping
    )
  )
}


initial_color_mapping <- function(data, colors, create_configurations) {
  length_unique_groups <- nlevels(data[["group"]])
  # if colors provided, check if enough colors are present
  if (!is.null(colors)) {
    # get unique groups and number of groups
    if (length_unique_groups > length(colors)) {
      stop(stringr::str_glue("Only {length(colors)} colors provided but {length_unique_groups} unique levels in group present. Please add more colors or consider dropping levels."))
    }
    color_mapping <- colors
    names(color_mapping) <- levels(data[["group"]])
  } else {
    length_unique_groups <- nlevels(data[["group"]])
    if (length_unique_groups == 1) {
      colors <- "black"
    } else {
      colors <- create_configurations$colors[1:max(3, min(length_unique_groups, 9))]
      if (length_unique_groups == 2) {
        colors <- colors[1:2]
      } else if (length_unique_groups > 9) {
        n1 <- floor(length_unique_groups / 9)
        n2 <- length_unique_groups %% 9
        colors <- c(rep(colors, n1), colors[1:n2])
      }
    }
    color_mapping <- colors
    names(color_mapping) <- levels(data[["group"]])
  }

  return(color_mapping)
}

rescale_to_domain <- function(values_to_rescale, reference_values) {
  # Calculate the range of the reference values
  reference_min <- min(reference_values, na.rm = TRUE)
  reference_max <- max(reference_values, na.rm = TRUE)

  # Calculate the range of the values to rescale
  values_min <- min(values_to_rescale, na.rm = TRUE)
  values_max <- max(values_to_rescale, na.rm = TRUE)

  # Apply the rescaling
  rescaled_values <- (values_to_rescale - values_min) / (values_max - values_min) * (reference_max - reference_min) + reference_min

  return(rescaled_values)
}

extend_range <- function(values) {
  min_val <- min(values)
  max_val <- max(values)
  range_val <- max_val - min_val
  extension <- 0.04 * range_val

  extended_min <- min_val - extension
  extended_max <- max_val + extension

  return(c(extended_min, extended_max))
}
