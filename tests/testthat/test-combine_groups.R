library(testthat)
library(stringr)
library(dplyr)
library(SveltePlots)

test_that("Multiple series with the same groups should result in one legend entry (combine_same_groups = TRUE)", {
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
      data = purchases[purchases$revenue == max(purchases$revenue), ] %>% droplevels(),
      mapping = spaes(x = date, y = revenue, group = age),
      type = "points",
      size = 5,
      tooltip = F
    )
  expect_equal(unique(sp$x$list_input[[1]]$data$id), c("Young", "Middle", "Old"))
})

test_that("Multiple series with the same groups should result in different legend entry (combine_same_groups = FALSE)", {
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
      alpha = 0.4
    ) %>%
    sp_add_series(
      data = purchases[purchases$revenue == max(purchases$revenue), ] %>% droplevels(),
      mapping = spaes(x = date, y = revenue, group = age),
      type = "points",
      size = 5,
      tooltip = F
    )
  expect_equal(unique(sp$x$list_input[[1]]$data$id), c("Young", "Middle", "Old", "Young.1", "Middle.1", "Old.1", "Old.2"))
})
