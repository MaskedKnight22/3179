
// “vg_1” which contains the location of the Vega-Lite JSON file.
var vg_1 = "daily_cost_bar_chart.vg.json"; 


// embeds the Vega-Lite visualisation stored in “vg_1” in the div container named “bar_chart” (do not forget the “#” key before the div name).
vegaEmbed("#bar_chart", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);