library(testthat)
library(stringr)
library(dplyr)
library(SveltePlots)

test_that("Multiple series with the same groups should result in one legend entry (combine_same_groups = TRUE)", {
  data("purchases")
  sp <- sp(
    data = purchases_age,
    type = "line",
    mapping = spaes(x = adjusted_timestamp, y = revenue_roll, group = age),
    combine_same_groups = TRUE
  ) %>%
    sp_add_series(
      data = purchases_age,
      mapping = spaes(x = adjusted_timestamp, y = revenue, group = age),
      type = "points",
      alpha = 0.4
    ) %>%
    sp_add_series(
      data = purchases_age[purchases_age$revenue == max(purchases_age$revenue), ] %>% droplevels(),
      mapping = spaes(x = adjusted_timestamp, y = revenue, group = age),
      type = "points",
      size = 5,
      tooltip = F
    )
  expect_equal(unique(sp$x$list_input[[1]]$data$id), c("D0 - D7", "D8 - D30", "D31+"))
})

test_that("Multiple series with the same groups should result in different legend entry (combine_same_groups = FALSE)", {
  data("purchases")
  sp <- sp(
    data = purchases_age,
    type = "line",
    mapping = spaes(x = adjusted_timestamp, y = revenue_roll, group = age),
    combine_same_groups = FALSE
  ) %>%
    sp_add_series(
      data = purchases_age,
      mapping = spaes(x = adjusted_timestamp, y = revenue, group = age),
      type = "points",
      alpha = 0.4
    ) %>%
    sp_add_series(
      data = purchases_age[purchases_age$revenue == max(purchases_age$revenue), ] %>% droplevels(),
      mapping = spaes(x = adjusted_timestamp, y = revenue, group = age),
      type = "points",
      size = 5,
      tooltip = F
    )
  expect_equal(unique(sp$x$list_input[[1]]$data$id), c("D0 - D7", "D8 - D30", "D31+", "D0 - D7.1", "D8 - D30.1", "D31+.1", "D31+.2"))
})
