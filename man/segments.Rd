% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/data.R
\docType{data}
\name{segments}
\alias{segments}
\title{Segments}
\format{
A tibble with 658 rows and 8 variables:
\describe{
  \item{event_type}{Type of the event, a character string.}
  \item{start_date}{Start date of the event, in Date format.}
  \item{end_date}{End date of the event, in Date format.}
  \item{extra_details}{Additional details about the event, a character string.}
  \item{colors}{Color associated with the event, a character string.}
  \item{key}{A numeric identifier for the event.}
  \item{y_start}{Starting y-coordinate for graphical representation, a numeric value.}
  \item{y_end}{Ending y-coordinate for graphical representation, a numeric value.}
}
}
\usage{
segments
}
\description{
This dataset contains information about various events including promotions, gacha events, and experiments.
Each event has details such as start and end dates, additional descriptions, and graphical representation attributes.
}
\examples{
data(segments)
head(segments)
}
\keyword{datasets}
