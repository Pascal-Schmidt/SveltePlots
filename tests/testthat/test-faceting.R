library(testthat)
library(stringr)
library(dplyr)
library(SveltePlots)

test_that("Number of facets is equal to number of countries", {
  data("gapminder")
  sp <- sp(
    data = gapminder,
    mapping = spaes(x = year, y = lifeExp),
    type = "line",
    facet_var = "country"
  ) %>%
    SveltePlots::sp_facet(ncol = 5)
  expect_equal(gapminder$country %>% unique() %>% length(), sp$x$list_input %>% length())
})

test_that("Number of facets when a vector of columns is specified is equal to number of levels", {
  data("penguins")
  sp <- sp(
    data = penguins,
    mapping = spaes(x = flipper_length_mm, y = bill_length_mm),
    type = "points",
    facet_var = c("sex", "species"),
    include_legend = FALSE
  ) %>%
    sp_x_axis(rotation_axis_ticks = -90) %>%
    SveltePlots::sp_facet()
  expect_equal(dplyr::distinct(penguins, sex, species) %>% nrow(), sp$x$list_input %>% length())
})


