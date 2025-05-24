#' Penguins Dataset
#'
#' @description
#' This dataset provides measurements of penguins. It is included in the `palmerpenguins` package.
#' For detailed information, please refer to the [palmerpenguins documentation](https://allisonhorst.github.io/palmerpenguins/).
#'
#' @format A data frame with 344 rows and 8 variables.
#' \describe{
#'   \item{species}{Factor with levels Adelie, Chinstrap, Gentoo.}
#'   \item{island}{Factor with levels Biscoe, Dream, Torgersen.}
#'   \item{bill_length_mm}{Numeric.}
#'   \item{bill_depth_mm}{Numeric.}
#'   \item{flipper_length_mm}{Numeric.}
#'   \item{body_mass_g}{Numeric.}
#'   \item{sex}{Factor with levels female, male.}
#'   \item{year}{Integer.}
#' }
#'
#' @source
#' This dataset is sourced from the `palmerpenguins` package.
#' @seealso \href{https://allisonhorst.github.io/palmerpenguins/}{palmerpenguins documentation}
#'
#' @examples
#' data(penguins)
#' head(penguins)
"penguins"

#' Gapminder Dataset
#'
#' @description
#' This dataset provides country-level data on life expectancy, GDP per capita, and population. It is included in the `gapminder` package.
#' For detailed information, please refer to the [gapminder documentation](https://cran.r-project.org/package=gapminder).
#'
#' @format A data frame with 1704 rows and 6 variables.
#' \describe{
#'   \item{country}{Factor with country names.}
#'   \item{continent}{Factor with continent names.}
#'   \item{year}{Integer.}
#'   \item{lifeExp}{Numeric.}
#'   \item{pop}{Integer.}
#'   \item{gdpPercap}{Numeric.}
#' }
#'
#' @source
#' This dataset is sourced from the `gapminder` package.
#' @seealso \href{https://cran.r-project.org/package=gapminder}{gapminder documentation}
#'
#' @examples
#' data(gapminder)
#' head(gapminder)
"gapminder"

#' Revenue Data
#'
#' @description
#' This dataset contains revenue data over a period of time with rolling revenue calculations.
#'
#' @format A data frame with 10 rows and 4 variables:
#' \describe{
#'   \item{date}{Date. The timestamp of the revenue data.}
#'   \item{age}{Factor. The age range category.}
#'   \item{revenue}{Numeric. The revenue for the given date.}
#'   \item{revenue_roll}{Numeric. The rolling revenue calculation.}
#' }
#'
#' @examples
#' data(purchases)
#' head(purchases)
"purchases"

#' Walmart Weekly Sales Data
#'
#' Weekly Sales Data
#'
#' A dataset containing weekly sales data for a retail company, including information on holidays, markdowns, and economic indicators.
#'
#' @format A tibble with 1,001 rows and 17 variables:
#' \describe{
#'   \item{id}{Unique identifier for the combination of Store and Dept, a factor}
#'   \item{Store}{Store number, a numeric value}
#'   \item{Dept}{Department number, a numeric value}
#'   \item{Date}{Date of the observation, in Date format}
#'   \item{Weekly_Sales}{Sales for the given department in the given store, a numeric value}
#'   \item{IsHoliday}{Indicator of whether the week is a special holiday week, a logical value}
#'   \item{Type}{Type of store, a character string}
#'   \item{Size}{Size of the store, a numeric value}
#'   \item{Temperature}{Temperature during the week, in degrees Fahrenheit, a numeric value}
#'   \item{Fuel_Price}{Cost of fuel in the region, a numeric value}
#'   \item{MarkDown1}{Markdown 1, a numeric value}
#'   \item{MarkDown2}{Markdown 2, a numeric value}
#'   \item{MarkDown3}{Markdown 3, a numeric value}
#'   \item{MarkDown4}{Markdown 4, a numeric value}
#'   \item{MarkDown5}{Markdown 5, a numeric value}
#'   \item{CPI}{Consumer Price Index, a numeric value}
#'   \item{Unemployment}{Unemployment rate, a numeric value}
#' }
#'
#' @examples
#' data(walmart_sales_weekly)
#' head(walmart_sales_weekly)
"walmart_sales_weekly"

#' Confidence Intervals Data
#'
#' @description
#' This dataset contains time series data with actual values and corresponding confidence intervals.
#'
#' @format A tibble with 368 rows and 7 variables:
#' \describe{
#'   \item{.model_id}{Integer. The model ID.}
#'   \item{.model_desc}{Character. Description of the model.}
#'   \item{.key}{Factor. The key indicating actual or forecast data.}
#'   \item{.index}{Date. The date of the observation.}
#'   \item{.value}{Numeric. The actual value.}
#'   \item{.conf_lo}{Numeric. The lower bound of the confidence interval.}
#'   \item{.conf_hi}{Numeric. The upper bound of the confidence interval.}
#' }
#'
#' @examples
#' data(confidence_intervals)
#' head(confidence_intervals)
"confidence_intervals"

#' Plant Growth Dataset
#'
#' @description
#' This dataset contains information about the growth of plants under different treatments and concentrations over time.
#'
#' @format A tibble with 84 rows and 6 variables:
#' \describe{
#'   \item{Plant}{Factor. The identifier for the plant.}
#'   \item{Type}{Factor. The type of plant, here represented as "Quebec".}
#'   \item{Treatment}{Factor. The treatment applied to the plant, here represented as "nonchilled".}
#'   \item{conc}{Numeric. The concentration level of the treatment.}
#'   \item{uptake}{Numeric. The uptake measurement of the plant.}
#'   \item{date}{Date. The date of the observation.}
#' }
#'
#' @examples
#' data(CO2)
#' head(CO2)
"CO2"

#' Economics Data
#'
#' @description
#' This dataset contains economic data, including personal consumption expenditures, population, personal savings rate, median duration of unemployment, and the number of unemployed individuals, recorded monthly from July 1967.
#'
#' @format A tibble with 574 rows and 6 variables:
#' \describe{
#'   \item{date}{Date. The date of the observation.}
#'   \item{pce}{Numeric. Personal consumption expenditures, in billions of dollars.}
#'   \item{pop}{Numeric. Total population, in thousands.}
#'   \item{psavert}{Numeric. Personal savings rate, as a percentage.}
#'   \item{uempmed}{Numeric. Median duration of unemployment, in weeks.}
#'   \item{unemploy}{Numeric. Number of unemployed individuals, in thousands.}
#' }
#'
#' @source
#' This dataset is sourced from the Federal Reserve Economic Data (FRED) database.
#' \url{https://fred.stlouisfed.org/}
#'
#' @examples
#' data(economics)
#' head(economics)
"economics"

#' Example Dataset: Retention Data
#'
#' @description
#' This dataset contains retention data for different custom categories and progression stages. It includes the number of observations at two different points (n.x and n.y) and the retention rate.
#'
#' @format A tibble with 38 rows and 5 variables:
#' \describe{
#'   \item{custom_01}{Character. A custom category identifier.}
#'   \item{progression_2}{Factor. The progression stage.}
#'   \item{n.x}{Numeric. The number of observations at the first point.}
#'   \item{n.y}{Numeric. The number of observations at the second point.}
#'   \item{retention}{Numeric. The retention rate, calculated as n.x divided by n.y.}
#' }
#'
#' @examples
#' data(quests)
#' head(quests)
#'
"quests"

#' Example Dataset: Fruit Data
#'
#' @description
#' This dataset contains information about different types of fruits in various baskets over multiple years. It includes details such as the fruit type, the value, and the color of the fruit.
#'
#' @format A tibble with 16 rows and 6 variables:
#' \describe{
#'   \item{id}{Integer. A unique identifier for each record.}
#'   \item{year}{Character. The year the data was recorded.}
#'   \item{basket}{Integer. The basket number containing the fruits.}
#'   \item{fruit}{Character. The type of fruit.}
#'   \item{value}{Integer. The value associated with the fruit.}
#'   \item{color}{Character. The color of the fruit.}
#' }
#'
#' @examples
#' data(fruit)
#' head(fruit)
#'
"fruit"

#' Segments
#'
#' This dataset contains information about various events including promotions, gacha events, and experiments.
#' Each event has details such as start and end dates, additional descriptions, and graphical representation attributes.
#'
#' @format A tibble with 658 rows and 8 variables:
#' \describe{
#'   \item{event_type}{Type of the event, a character string.}
#'   \item{start_date}{Start date of the event, in Date format.}
#'   \item{end_date}{End date of the event, in Date format.}
#'   \item{extra_details}{Additional details about the event, a character string.}
#'   \item{colors}{Color associated with the event, a character string.}
#'   \item{key}{A numeric identifier for the event.}
#'   \item{y_start}{Starting y-coordinate for graphical representation, a numeric value.}
#'   \item{y_end}{Ending y-coordinate for graphical representation, a numeric value.}
#' }
#' @examples
#' data(segments)
#' head(segments)
"segments"

#' Daily Active Users Data
#'
#' This dataset contains daily active user (DAU) counts for a specific period, along with slot information.
#'
#' @format A tibble with 19 rows and 3 variables:
#' \describe{
#'   \item{date}{The date, in Date format.}
#'   \item{DAU}{Daily active users count, a numeric value.}
#'   \item{Slot}{Slot number associated with the DAU count, a numeric value.}
#' }
#' @examples
#' data(dau)
#' head(dau)
"dau"
