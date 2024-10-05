window.onload = function() {
  // Step 1: Select all elements with the tag 'linechart-groups-facet'
  const shadowHosts = document.querySelectorAll('linechart-groups-facet');

  // Step 2: Loop through all shadow hosts
  shadowHosts.forEach(shadowHost => {
    // Step 3: Access the shadow root of each host
    const shadowRoot = shadowHost.shadowRoot;

    // Step 4: Create a <style> element to hold your CSS rules
    const style = document.createElement('style');

    // Step 5: Add your CSS to the style element
    style.textContent = `
      .chart {
        max-width: 700px !important;
      }
    `;

    // Step 6: Append the <style> element to each shadow DOM
    shadowRoot.appendChild(style);
  });
};
