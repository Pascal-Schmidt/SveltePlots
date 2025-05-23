% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/data.R
\docType{data}
\name{walmart_sales_weekly}
\alias{walmart_sales_weekly}
\title{Walmart Weekly Sales Data}
\format{
A tibble with 1,001 rows and 17 variables:
\describe{
  \item{id}{Unique identifier for the combination of Store and Dept, a factor}
  \item{Store}{Store number, a numeric value}
  \item{Dept}{Department number, a numeric value}
  \item{Date}{Date of the observation, in Date format}
  \item{Weekly_Sales}{Sales for the given department in the given store, a numeric value}
  \item{IsHoliday}{Indicator of whether the week is a special holiday week, a logical value}
  \item{Type}{Type of store, a character string}
  \item{Size}{Size of the store, a numeric value}
  \item{Temperature}{Temperature during the week, in degrees Fahrenheit, a numeric value}
  \item{Fuel_Price}{Cost of fuel in the region, a numeric value}
  \item{MarkDown1}{Markdown 1, a numeric value}
  \item{MarkDown2}{Markdown 2, a numeric value}
  \item{MarkDown3}{Markdown 3, a numeric value}
  \item{MarkDown4}{Markdown 4, a numeric value}
  \item{MarkDown5}{Markdown 5, a numeric value}
  \item{CPI}{Consumer Price Index, a numeric value}
  \item{Unemployment}{Unemployment rate, a numeric value}
}
}
\usage{
walmart_sales_weekly
}
\description{
Weekly Sales Data
}
\details{
A dataset containing weekly sales data for a retail company, including information on holidays, markdowns, and economic indicators.
}
\examples{
data(walmart_sales_weekly)
head(walmart_sales_weekly)
}
\keyword{datasets}
