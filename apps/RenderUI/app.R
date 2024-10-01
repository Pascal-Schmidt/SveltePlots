library(dplyr)
library(shiny)
library(SveltePlots)

data("gapminder")
gapminder <- gapminder %>%
  dplyr::filter(year == 2007)

custom_css_titles <- "background-color: grey; color: white;
                      text-align: center; padding: 10px;
                      border-radius: 5px;"

continents <- unique(gapminder$continent)

ui <- fluidPage(

  titlePanel("Gapminder Continents"),

  fluidRow(
    column(
      12,
      selectInput(
        inputId = "continents",
        label = "Select Continents",
        choices = continents,
        selected = continents,
        multiple = TRUE
      )
    ),

    fluidRow(
      column(
        12,
        SveltePlotsOutput("gapminder_data")
      )
    )
  )
)

server <- function(input, output) {

  filtered_data <- reactive({
    gapminder %>%
      filter(
        continent %in% input$continents
      )
  })

  output$gapminder_data <- SveltePlots::renderSveltePlots(
    sp(
      data = filtered_data(),
      spaes(x = gdpPercap, y = lifeExp),
      "points",
      facet_var = "continent",
      include_legend = FALSE
    ) %>%
      sp_title(custom_css = custom_css_titles) %>%
      sp_facet(scales = "free")
  )

}

shinyApp(ui = ui, server = server, options = list(host = "0.0.0.0", port = 3838))
