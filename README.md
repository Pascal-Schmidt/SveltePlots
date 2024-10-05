

# Introduction to SveltePlots

**SveltePlots** is an innovative charting library designed to enhance `Shiny` applications by utilizing the power of Svelte and Javascript. This library is a wrapper for a custom Svelte web component that leverages SVG to create interactive and dynamic charts. `SveltePlots` includes a limited amount of charts to date which are line and scatter plots, bar charts, density charts, and histograms. 

<br />

<!-- HTML content for pkgdown site -->
<div>
<iframe src="https://Pascal-Schmidt.github.io/SveltePlots/examples.html" width="100%" height="1900"></iframe>
</div>


## Key Features

- **State Management**: Benefit from Svelte's exceptional state management to handle dynamic updates seamlessly.
- **Ease of Use**: Eliminate the need for `proxy` functions, `renderUI`, `insertUI`, and `removeUI` in `Shiny`, simplifying your code and enhancing maintainability.
- **Interactive Charts**: Create highly interactive and responsive charts with minimal effort.
- **SVG-based**: Utilize SVG for crisp and scalable vector graphics, ideal for a wide range of data visualizations.

## Ease of Use

### Traditional Approach with Proxy Functions

When using JavaScript-based charting libraries in `Shiny`:

- **Proxy Functions**: Proxy functions are created to handle updates to the chart. These functions allow developers to modify certain parts of the chart specification without re-rendering the entire chart. For example, if only the data points change, the proxy function will update just the data-related part of the chart.
- **Partial Updates**: By sending only the changes (such as new data points or updated axis labels) to the client-side JavaScript, these functions help maintain performance and responsiveness. This avoids the overhead of re-sending and re-rendering the entire chart.

### SveltePlots Approach

**SveltePlots** takes a different approach due to the advantages provided by Svelte's reactivity system:

- **Complete Specification Updates**: Instead of sending partial updates, the entire chart specification is sent to Svelte. This might seem inefficient at first glance, but Svelte's optimized update mechanism ensures that only the parts of the DOM that need to change are updated.
- **Svelte's Reactivity**: Svelte automatically tracks the dependencies and efficiently updates only the parts of the chart that have changed. This makes it unnecessary to manually create proxy functions and manage partial updates.

### Benefits of SveltePlots

#### Simplified Code

By leveraging Svelte’s reactivity:

- **No Need for Proxy Functions**: Developers do not need to create and manage proxy functions to handle partial updates. This reduces the complexity of the code base.
- **Automatic Updates**: Svelte handles the state management and ensures that only the necessary parts of the chart are re-rendered, even when the entire specification is sent.

#### Enhanced Maintainability

- **Reduced Boilerplate**: Without the need for proxy functions, the code becomes cleaner and easier to maintain.
- **Consistency**: Sending the entire specification ensures that the chart’s state is always consistent with the application's state, reducing the likelihood of bugs caused by partial updates.

## Limitations

- **Not Suitable for Big Data**: Due to the inherent limitations of SVG, `SveltePlots` is not recommended for big data visualizations where performance can be impacted by rendering a large number of elements.


# Installation

```r
install.packages("SveltePlots")
```

# Examples

```r
library(tidyverse)
library(SveltePlots)

data("penguins")
sp(
  data = penguins %>% 
    dplyr::distinct(flipper_length_mm, bill_length_mm, species),
  mapping = spaes(x = flipper_length_mm, y = bill_length_mm, group = species),
  type = "points"
) %>% 
  sp_title("Penguins", font_size = 26)
```

<!-- HTML content for pkgdown site -->
<div>
<iframe src="https://pascal-schmidt.github.io/SveltePlots/penguins.html" width="800" height=600"></iframe>
</div>

<!-- Fallback for GitHub front page -->
👉 [View the penguins plot](https://pascal-schmidt.github.io/SveltePlots/penguins.html)

