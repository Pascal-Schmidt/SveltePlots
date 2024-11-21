# Load libraries
library(shiny)
library(highcharter)
library(dplyr)
library(gapminder)

# Prepare the summarized data
gapminder_summary <- gapminder %>%
  group_by(continent, year) %>%
  summarize(mean_lifeExp = mean(lifeExp), .groups = 'drop')

continent_colors <- c(
  "Africa" = "#1f77b4",
  "Americas" = "#ff7f0e",
  "Asia" = "#2ca02c",
  "Europe" = "#d62728",
  "Oceania" = "#9467bd"
)

# Define UI
ui <- fluidPage(
  titlePanel("Mean Life Expectancy by Continent (Highcharter)"),

  sidebarLayout(
    sidebarPanel(
      checkboxGroupInput(
        inputId = "selected_continents",
        label = "Select Continents:",
        choices = unique(gapminder_summary$continent),
        selected = unique(gapminder_summary$continent)
      )
    ),
    mainPanel(
      highchartOutput("lifeExpChart")
    )
  )
)

# Define server logic
server <- function(input, output, session) {
  # Render the initial Highchart
  output$lifeExpChart <- renderHighchart({
    hc <- hchart(
      gapminder_summary,
      type = "line",
      hcaes(x = year, y = mean_lifeExp, group = continent, id = continent),
      id = unique(gapminder_summary$continent)
    ) %>%
      hc_colors(unname(continent_colors))
    hc
  })

  previous_selection <- reactiveVal(unique(gapminder_summary$continent))
  observeEvent(input$selected_continents, {
    proxy <- highchartProxy("lifeExpChart")

    # Get the current and previous selections
    current_selection <- input$selected_continents
    previous <- previous_selection()

    # Identify if a continent was added or removed
    if (length(current_selection) > length(previous)) {
      # A continent was added
      added_continent <- setdiff(current_selection, previous)
      data <- gapminder_summary %>%
        filter(continent == added_continent) %>%
        select(year, mean_lifeExp)

      proxy %>%
        hcpxy_add_series(
          data = list_parse2(data),
          type = "line",
          name = added_continent,
          id = added_continent,
          color = continent_colors[added_continent][[1]]
        )

    } else if (length(current_selection) < length(previous)) {
      removed_continent <- setdiff(previous, current_selection)
      proxy %>% hcpxy_remove_series(id = removed_continent)
    }

    previous_selection(current_selection)
  })
}

# Run the application
shinyApp(ui = ui, server = server)
