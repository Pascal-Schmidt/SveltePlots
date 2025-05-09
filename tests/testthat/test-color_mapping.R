library(testthat)
library(stringr)
library(dplyr)
library(SveltePlots)

test_that("Check for default colors", {
  data("penguins")
  sp <- sp(
    data = penguins,
    mapping = spaes(x = flipper_length_mm, y = bill_length_mm, group = species),
    type = "points"
  )
  penguin_colors <- list(
    Adelie = "#1F77B4",
    Chinstrap = "#FF7F0E",
    Gentoo = "#2CA02C"
  )
  expect_equal(sp$x$list_input[[1]]$color_mapping, penguin_colors)
})

test_that("Make sure default colors repeat for more than 9 levels", {
  data("gapminder")
  gapminder <- gapminder %>%
    dplyr::mutate(
      country = as.character(country),
      year = lubridate::ymd(paste0(year, "-01-01"))
    ) %>%
    dplyr::filter(continent == "Europe", year == lubridate::ymd("2007-01-01"))
  sp <- sp(data = gapminder, spaes(x = pop, y = gdpPercap, group = country), type = "points")
  country_colors <- list(
    Albania = "#1F77B4",
    Austria = "#FF7F0E",
    Belgium = "#2CA02C",
    `Bosnia and Herzegovina` = "#D62728",
    Bulgaria = "#9467BD",
    Croatia = "#8C564B",
    `Czech Republic` = "#E377C2",
    Denmark = "#7F7F7F",
    Finland = "#BCBD22",
    France = "#1F77B4",
    Germany = "#FF7F0E",
    Greece = "#2CA02C",
    Hungary = "#D62728",
    Iceland = "#9467BD",
    Ireland = "#8C564B",
    Italy = "#E377C2",
    Montenegro = "#7F7F7F",
    Netherlands = "#BCBD22",
    Norway = "#1F77B4",
    Poland = "#FF7F0E",
    Portugal = "#2CA02C",
    Romania = "#D62728",
    Serbia = "#9467BD",
    `Slovak Republic` = "#8C564B",
    Slovenia = "#E377C2",
    Spain = "#7F7F7F",
    Sweden = "#BCBD22",
    Switzerland = "#1F77B4",
    Turkey = "#FF7F0E",
    `United Kingdom` = "#2CA02C"
  )

  expect_equal(sp$x$list_input[[1]]$color_mapping, country_colors)
})


test_that("Default colors work in combination with added colors", {
  data("gapminder")
  gapminder <- gapminder %>%
    dplyr::mutate(
      country = as.character(country),
      year = lubridate::ymd(paste0(year, "-01-01"))
    )

  sp <- SveltePlots::sp(
    data = gapminder %>%
      dplyr::group_by(year, continent) %>%
      dplyr::summarise(
        lifeExp = mean(lifeExp)
      ) %>%
      dplyr::ungroup(),
    mapping = spaes(x = year, y = lifeExp, group = continent),
    type = "line",
    combine_same_groups = TRUE
  ) %>%
    sp_add_series(
      data = gapminder %>%
        dplyr::filter(country == "Germany"),
      mapping = spaes(x = year, y = lifeExp, group = country),
      type = "line",
      colors = "gold"
    ) %>%
    sp_add_series(
      gapminder %>%
        dplyr::filter(country == "Chile"),
      mapping = spaes(x = year, y = lifeExp, group = country),
      type = "line",
      colors = "silver"
    ) %>%
    sp_add_series(
      gapminder %>%
        dplyr::filter(country == "Chile"),
      mapping = spaes(x = year, y = lifeExp, group = country),
      type = "points",
      size = 3,
      tooltip = FALSE
    )
  continent_colors <- list(
    Africa = "#1F77B4",
    Americas = "#FF7F0E",
    Asia = "#2CA02C",
    Europe = "#D62728",
    Oceania = "#9467BD",
    Germany = "gold",
    Chile = "silver"
  )
  expect_equal(sp$x$list_input[[1]]$color_mapping, continent_colors)
})


test_that("Same groups get colore differently based on specified input colors", {
  data("gapminder")
  gapminder <- gapminder %>%
    dplyr::mutate(
      country = as.character(country),
      year = lubridate::ymd(paste0(year, "-01-01"))
    )

  sp <- SveltePlots::sp(
    data = gapminder %>%
      dplyr::group_by(year, continent) %>%
      dplyr::summarise(
        lifeExp = mean(lifeExp)
      ) %>%
      dplyr::ungroup(),
    mapping = spaes(x = year, y = lifeExp, group = continent),
    type = "line",
    combine_same_groups = T
  ) %>%
    sp_add_series(
      data = gapminder %>%
        dplyr::filter(country == "Germany"),
      mapping = spaes(x = year, y = lifeExp, group = country),
      type = "line",
      colors = "gold"
    ) %>%
    sp_add_series(
      gapminder %>%
        dplyr::filter(country == "Chile"),
      mapping = spaes(x = year, y = lifeExp, group = country),
      type = "line",
      colors = "silver"
    ) %>%
    sp_add_series(
      gapminder %>%
        dplyr::filter(country == "Chile"),
      mapping = spaes(x = year, y = lifeExp, group = country),
      type = "points",
      size = 3,
      tooltip = FALSE,
      colors = "pink"
    )
  continent_colors <- list(
    Africa = "#1F77B4",
    Americas = "#FF7F0E",
    Asia = "#2CA02C",
    Europe = "#D62728",
    Oceania = "#9467BD",
    Germany = "gold",
    Chile = "silver",
    Chile = "pink"
  )
  expect_equal(sp$x$list_input[[1]]$color_mapping, continent_colors)
})

test_that("Same series get colored the same if no color is specified", {
  data("purchases")
  sp <- sp(
    data = purchases,
    type = "line",
    mapping = spaes(x = date, y = revenue_roll, group = age),
    combine_same_groups = TRUE
  ) %>%
    sp_add_series(
      data = purchases,
      mapping = spaes(x = date, y = revenue, group = age),
      type = "points",
      alpha = 0.4
    ) %>%
    sp_add_series(
      data = purchases[purchases$revenue == max(purchases$revenue), ],
      mapping = spaes(x = date, y = revenue, group = age),
      type = "points",
      size = 5,
      tooltip = F
    )
  colors <- list(
    `Young` = "#1F77B4",
    `Middle` = "#FF7F0E",
    `Old` = "#2CA02C"
  )

  expect_equal(sp$x$list_input[[1]]$color_mapping, colors)
})


test_that("Same series get colored differently if specified", {
  data("purchases")
  sp <- sp(
    data = purchases,
    type = "line",
    mapping = spaes(x = date, y = revenue_roll, group = age),
    combine_same_groups = FALSE
  ) %>%
    sp_add_series(
      data = purchases,
      mapping = spaes(x = date, y = revenue, group = age),
      type = "points",
      alpha = 0.4,
      colors = c("black", "pink", "violet")
    ) %>%
    sp_add_series(
      data = purchases[purchases$revenue == max(purchases$revenue), ] %>% droplevels(),
      mapping = spaes(x = date, y = revenue, group = age),
      type = "points",
      size = 5,
      tooltip = F,
      colors = "red"
    )
  colors <- list(
    `Young` = "#1F77B4",
    `Middle` = "#FF7F0E",
    `Old` = "#2CA02C",
    `Young` = "black",
    `Middle` = "pink",
    `Old` = "violet",
    `Old` = "red"
  )


  expect_equal(sp$x$list_input[[1]]$color_mapping, colors)
})
