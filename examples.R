library(SveltePlots)
library(tidyverse)

data("penguins")
sp_penguins <- sp(
  data = penguins,
  mapping = spaes(x = flipper_length_mm, y = bill_length_mm, group = species),
  type = "points", height = 350
) %>%
  sp_title("Penguins")

data("purchases")
sp_purchases <- sp(
  data = purchases_age, type = "line",
  mapping = spaes(x = date, y = revenue_roll, group = age),
  colors = c("red", "green", "blue"),
  combine_same_groups = TRUE, height = 350
) %>%
  sp_add_series(
    data = purchases_age,
    mapping = spaes(x = date, y = revenue, group = age),
    type = "points",
    alpha = 0.4,
    tooltip = F,
    include_legend = F
  ) %>%
  sp_add_series(
    data = purchases_age[purchases_age$revenue == max(purchases_age$revenue), ],
    mapping = spaes(x = date, y = revenue, group = age),
    type = "points",
    size = 5,
    tooltip = F
  ) %>%
  sp_add_segments(
    x_start = "2023-08-31", x_end = "2023-09-05",
    y_start = "auto", y_end ="auto",
    type = "rect",
    opacity = 0.2,
    background_color = "black",
    text_color = "white",
    show_legend = TRUE,
    legend_text = "Labor Day Bundle",
    tooltip = "Revenue: <strong>235</strong>"
  ) %>%
  sp_add_arrows(
    x_start = c("2023-10-01", "2023-08-01"), x_end = c("2023-09-05", "2023-08-31"),
    y_start = c(1200, 1200), y_end = c(1000, 1370),
    arrow_head = c(0, 0),
    size = c(200, 200),
    curvature = c(0.2, 0.5),
    direction = c("downward", "downward"),
    color = c("black", "black"),
    arrow_head_type = c("triangle", "triangle")
  ) %>%
  sp_add_text(
    x = c("2023-05-01", "2023-10-01"),
    y = c(1300, 1200),
    text = c(
      "This was the highest revenue day \n due to the labor day bundle",
      "Labor Day  \n Bundle Run \n Window"
    ),
    font_size = 10
  ) %>%
  sp_title("Revenue By Age Group") %>%
  sp_x_axis(title = "", rotation_axis_ticks = -30)

data("gapminder")
gapminder <- gapminder %>%
  dplyr::mutate(
    country = as.character(country),
    year = lubridate::ymd(paste0(year, "-01-01"))
  )
sp_gapminder <- sp(
  data = gapminder %>%
    dplyr::filter(
      year == lubridate::ymd("2007-01-01"),
      continent != "Oceania"
    ),
  mapping = spaes(x = lifeExp, group = continent),
  type = "density", alpha = 1, size = 1, height = 350
) %>%
  sp_x_axis("Life Expectancy")

data("fruit", package = "SveltePlots")
sp_fruit <- sp(
  data = fruit[, c("year", "fruit", "value")],
  mapping = spaes(x = year, y = value, group = fruit),
  type = "bar",
  mode = "grouped",
  height = 350
)

sp_hist <- sp(
  data = diamonds,
  mapping = spaes(x = price), height = 350,
  type = "histogram", alpha = 0.5, size = 1, breaks = 50, include_legend = FALSE
)

data("quests")
sp_quests <- sp(
  data = quests %>% dplyr::filter(AB == "a") %>% dplyr::slice(1:10),
  spaes(x = level, y = retention),
  type = "line", include_legend = FALSE, height = 350
) %>%
  sp_tooltip(
    background_color = "white",
    opacity = 0.6,
    animation = TRUE,
    cross_hair = TRUE,
    animation_params = list(duration = 2000, delay = 200),
    justify_content = "space-between"
  ) %>%
  SveltePlots::sp_x_axis(rotation_axis_ticks = 30, text_anchor = "end", linetype = "dotted")

data("segments")
data("dau")
dau <- dplyr::slice(dau, -dplyr::n())
sp_segments <- sp(
  data = dau,
  type = "line",
  spaes(x = date, y = DAU),
  tooltip = FALSE, height = 350
) %>%
  sp_add_series(
    data = dau,
    mapping = spaes(x = date, y = DAU),
    type = "points",
    size = 4,
    tooltip = TRUE,
  ) %>%
  sp_add_segments(
    x_start = segments$start_date,
    x_end = segments$end_date,
    y_start = "even",
    y_end = "even",
    type = "rect",
    opacity = 0.2,
    background_color = segments$colors,
    text_color = "white",
    show_legend = TRUE,
    legend_text = segments$event_type,
    tooltip = unlist(segments$extra_details),
    y_position = segments$y_end,
    key = segments$key
  ) %>%
  sp_title("DAU", font_size = 24) %>%
  sp_x_axis(rotation_axis_ticks = -30)

charts <- list(
  sp_penguins, sp_purchases,
  sp_gapminder, sp_fruit,
  sp_hist, sp_quests,
  sp_segments
)

library(shiny)
# Create the HTML structure
# Create the HTML structure
# Create the HTML structure
html_container <- tagList(
  tags$div(class = 'chart-container',
           tags$div(class = 'chart-row',
                    tags$div(class = 'chart-item', charts[[1]]),
                    tags$div(class = 'chart-item', charts[[2]])
           ),
           tags$div(class = 'chart-row',
                    tags$div(class = 'chart-item', charts[[3]]),
                    tags$div(class = 'chart-item', charts[[4]])
           ),
           tags$div(class = 'chart-row',
                    tags$div(class = 'chart-item', charts[[5]]),
                    tags$div(class = 'chart-item', charts[[6]])
           ),
           tags$div(class = 'chart-row',
                    tags$div(class = 'chart-item full-width', charts[[7]])
           )
  ),
  tags$style(HTML("
    .chart-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      overflow: hidden;
    }
    .chart-row {
      display: flex;
      gap: 5px;
    }
    .chart-item {
      flex: 1;
      height: 450px;
      box-sizing: border-box;
      width: 50%; /* Ensures initial equal width */
    }
    .chart-item.full-width {
      flex: 1 1 100%;
      height: 450px;
      width: 100%;
    }
  "))
)

library(htmltools)
browsable(html_container)

htmltools::save_html(html_container, file = here::here("docs/examples.html"))
htmltools::save_html(sp_penguins, file = here::here("docs/penguins.html"))

