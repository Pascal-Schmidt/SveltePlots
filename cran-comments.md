## R CMD check results

0 errors | 0 warnings | 1 note

## CRAN Submission Comments

This is the initial submission of the `SveltePlots` package.

`SveltePlots` is an interactive charting library built with Svelte and D3 and exposed through R using `htmlwidgets`. It simplifies the creation of dynamic SVG visualizations and removes the need for Shiny UI proxies (`renderUI`, `insertUI`, etc.) by leveraging Svelte’s reactive state management.

### Notes:

- The package includes a minified JavaScript library in `inst/htmlwidgets/lib/` for rendering charts in the browser.
- The package passes `R CMD check --as-cran` with 0 ERRORs, 0 WARNINGs, and 2 NOTEs:
  1. A harmless timestamp NOTE from `R CMD check` on macOS (`unable to verify current time`).
  2. HTML validation warnings from `R CMD check` related to modern HTML5 elements (e.g., `<main>`, `<script onload>`). 

I have addressed the comments from Benjamin Altmann from 2025/05/12 and hope they will be found to be satisfactory.
