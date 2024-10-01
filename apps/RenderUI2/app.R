library(shiny)
library(dplyr)
library(SveltePlots)

data("gapminder")

density_chart <- sp(
  data = gapminder,
  spaes(x = lifeExp, group = continent),
  "density"
) %>%
  sp_x_axis(
    rotation_axis_ticks = 90,
    text_anchor = "end"
  )

scatter_plot <- sp(
  data = gapminder %>%
    dplyr::filter(year == "2007"),
  spaes(x = gdpPercap, y = lifeExp, group = continent),
  "points"
) %>%
  sp_x_axis(
    rotation_axis_ticks = 90,
    text_anchor = "end"
  )

bar_chart <- sp(
  data = gapminder %>%
    dplyr::filter(year == "2007") %>%
    dplyr::count(continent),
  spaes(x = continent, y = n),
  "bar"
) %>%
  sp_x_axis(
    rotation_axis_ticks = 90,
    text_anchor = "end"
  )

# manually specify how many columns and rows for each chart specification
density_chart$x$list_input[[1]]$facet_col <- 3
density_chart$x$list_input[[1]]$facet_row <- 1
scatter_plot$x$list_input[[1]]$facet_col <- 3
scatter_plot$x$list_input[[1]]$facet_row <- 1
bar_chart$x$list_input[[1]]$facet_col <- 3
bar_chart$x$list_input[[1]]$facet_row <- 1

# manually specify the id for the keyed update
density_chart$x$list_input[[1]]$id <- "density"
scatter_plot$x$list_input[[1]]$id <- "scatter"
bar_chart$x$list_input[[1]]$id <- "bar"

chart_specs <- list(
  "scatter" = scatter_plot$x$list_input[[1]],
  "density" = density_chart$x$list_input[[1]],
  "bar" = bar_chart$x$list_input[[1]]
)

SveltePlots <- function(list_input) {

  # forward options using x
  x <- list(
    list_input = list_input
  )

  attr(x, 'TOJSON_ARGS') <- list(dataframe = "rows")

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

# Define UI for application that draws a histogram
ui <- fluidPage(

    # Application title
    titlePanel("RenderUI Example With Multiple Charts"),

    fluidRow(
      column(
        12,
        selectInput(
          inputId = "plot_type",
          label = "Choose plot type:",
          choices = c(
            "Density" = "density",
            "Scatter" = "scatter",
            "Bar" = "bar"
          ),
          selected = c("density", "scatter", "bar"),
          multiple = TRUE
        )
      )
    ),

    fluidRow(
      column(
        12,
        SveltePlotsOutput("gapminder_data")
      )
    )
)

# Define server logic required to draw a histogram
server <- function(input, output) {

  filtered_data <- reactive({
    chart_specs2 <- chart_specs[names(chart_specs) %in% input$plot_type]
    length_chart_specs2 <- length(chart_specs2)
    chart_specs2 <- unname(chart_specs2)
    for (i in seq_along(chart_specs2)) {
      chart_specs2[[i]]$facet_col <- length_chart_specs2
    }
    return(chart_specs2)
  })

  output$gapminder_data <- SveltePlots::renderSveltePlots(
    SveltePlots(filtered_data())
  )
}

# Run the application
shinyApp(ui = ui, server = server, options = list(host = "0.0.0.0", port = 3838))
