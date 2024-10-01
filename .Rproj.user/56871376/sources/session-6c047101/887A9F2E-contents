library(shiny)
library(dplyr)
library(SveltePlots)
data("walmart_sales_weekly")
walmart_sales_weekly <- walmart_sales_weekly %>%
  dplyr::mutate(
    Dept = as.factor(Dept)
  )

departments <- unique(walmart_sales_weekly$Dept)

# UI
ui <- fluidPage(

  titlePanel("Walmart Sales Dashboard"),

  fluidRow(
    column(
      12,
      # Date range input
      dateRangeInput(
        inputId = "date_range",
        label = "Select Date Range",
        start = min(walmart_sales_weekly$Date),
        end = max(walmart_sales_weekly$Date)
      )
    ),

    column(
      12,
      # Multi-select input for departments with all selected by default
      selectInput(
        inputId = "departments",
        label = "Select Departments",
        choices = departments,
        selected = departments,
        multiple = TRUE
      )
    )
  ),

  fluidRow(
    column(
      12,
      SveltePlotsOutput("sales_data")
    )
  )
)

# Server logic
server <- function(input, output) {

  filtered_data <- reactive({
    walmart_sales_weekly %>%
      filter(
        Date >= input$date_range[1],
        Date <= input$date_range[2],
        Dept %in% input$departments
      )
  })

  output$sales_data <- SveltePlots::renderSveltePlots(
    sp(
      data = filtered_data(),
      spaes(x = Date, y = Weekly_Sales, group = Dept),
      type = "line"
    )
  )
}

# Run the application
shinyApp(ui = ui, server = server, options = list(host = "0.0.0.0", port = 3838))
