# Base R Shiny image
FROM rocker/shiny

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libcurl4-openssl-dev \
    libssl-dev \
    libxml2-dev

# Create log directory for Shiny Server
RUN mkdir -p /var/log/shiny-server && chown shiny:shiny /var/log/shiny-server

# Copy your Shiny Server configuration
COPY shiny-server.conf /etc/shiny-server/shiny-server.conf

# Install R dependencies
RUN R -e "install.packages(c('dplyr', 'data.table', 'htmlwidgets', 'RColorBrewer', 'padr', 'purrr', 'stringr', 'tidyr'))"

# Copy the current SveltePlots package source code into the container
COPY . /tmp/SveltePlots/

# Install the SveltePlots package
RUN R CMD INSTALL /tmp/SveltePlots/

# Create directories for the Shiny apps
RUN mkdir -p /srv/shiny-server/walmart /srv/shiny-server/RenderUI /srv/shiny-server/RenderUI2

# Copy the Shiny apps into the container
COPY apps/walmart /srv/shiny-server/walmart
COPY apps/RenderUI /srv/shiny-server/RenderUI
COPY apps/RenderUI2 /srv/shiny-server/RenderUI2

# Change ownership of the app directories
RUN chown -R shiny:shiny /srv/shiny-server

# Expose the Shiny Server port
EXPOSE 3838

# Start Shiny Server
CMD ["/usr/bin/shiny-server"]
