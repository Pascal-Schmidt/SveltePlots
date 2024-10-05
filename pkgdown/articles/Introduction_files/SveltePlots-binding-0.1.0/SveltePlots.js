HTMLWidgets.widget({
  name: "SveltePlots",

  type: "output",

  factory: function (el) {
    el.innerHTML = "<linechart-groups-facet></linechart-groups-facet>";
    let chart_group = el.firstElementChild;

    // TODO: define shared variables for this instance

    return {
      renderValue: function (x) {
        // TODO: code to render the widget, e.g.
        chart_group.list_input = x.list_input;
      },

      resize: function(width, height) {
        // Optional: Code to re-render or adjust your widget when the container resizes
        // If your widget does not need to resize, you can leave this function empty
      }

    };
  },
});
