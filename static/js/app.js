// data route

d3.json('/api/fetal_data', function(data) {
    console.log(data)

// variable for x axis(fetal_deaths) fixed
var fetal_deaths = data.fetal_deaths
// variables for all other elements
var state = data.state
var race_eth = data.race_hispanic_origin
var age = data.age
var delivery_place = data.delivery_place
var delivery_method = data.delivery_method    
console.log(state)

// bar chart creation for method

 // Bar chart
 var bar_trace = [{
    type: 'bar',
    x: delivery_method,
    y: fetal_deaths,
    mode: 'markers',
    transforms: [{
      type: 'aggregate',
      groups: delivery_method,
      aggregations: [
        {target: 'y', func: 'avg', enabled: true},
      ]
    }]
  }]
  

// Apply layout

var barlayout = {
    title: `<b>Fetal Deaths by Delivery Method<b>`,
    xaxis: { title: "Delivery Method" },
    yaxis: { title: "Fetal Death count" },
    autosize: false,
    height: 400,
    width: 600,
    updatemenus: [{
          x: 0.85,
          y: 1.15,
          xref: 'paper',
          yref: 'paper',
          yanchor: 'top',
          active: 0,
          showactive: false,
          buttons: [{
              method: 'restyle',
              args: ['transforms[0].aggregations[0].func', 'avg'],
              label: 'Avg'
          }, {
              method: 'restyle',
              args: ['transforms[0].aggregations[0].func', 'sum'],
              label: 'Sum'
          }, {
              method: 'restyle',
              args: ['transforms[0].aggregations[0].func', 'max'],
              label: 'Max'
          }, {
              method: 'restyle',
              args: ['transforms[0].aggregations[0].func', 'mode'],
              label: 'Mode'
          }, {
              method: 'restyle',
              args: ['transforms[0].aggregations[0].func', 'median'],
              label: 'Median'
          }, {
              method: 'restyle',
              args: ['transforms[0].aggregations[0].func', 'count'],
              label: 'Count'
          }, {
              method: 'restyle',
              args: ['transforms[0].aggregations[0].func', 'stddev'],
              label: 'Std.Dev'
          }]
    }]
  }

Plotly.newPlot("bar", bar_trace, barlayout);

// pie chart
var pie_trace = [{
    values: fetal_deaths,
    labels: race_eth,
    type: 'pie'
    }];

// Apply layout for pie chart

var pielayout = {
    title: `<b>Fetal Deaths by Race/Hispanic Origin<b>`,
    height: 400,
    width: 500,
    
}

Plotly.newPlot("pie",pie_trace, pielayout);

// bar chart creation for method

 // Bar chart
 var barp_trace = [{
    type: 'bar',
    x: delivery_place,
    y: fetal_deaths,
    mode: 'markers',
    transforms: [{
      type: 'aggregate',
      groups: delivery_method,
      aggregations: [
        {target: 'y', func: 'avg', enabled: true},
      ]
    }]
  }]
  

// Apply layout

var barplayout = {
    title: `<b>Fetal Deaths by Delivery Place<b>`,
    xaxis: { title: "Delivery Place" },
    yaxis: { title: "Fetal Death count" },
    autosize: false,
    height: 400,
    width: 600,
    }

Plotly.newPlot("bar_place", barp_trace, barplayout);



// add map for state data
  
var state = [{
    type: 'bar',
    x: fetal_deaths.sort(function(a,b){return a - b}),
    y: state,
    orientation: 'h'
  }];
  var statelayout = {
    title: `<b>Fetal Deaths by State<b>`,
    xaxis: { title: "Fetal Death count" },
    yaxis: { title: "State" },
    autosize: false,
    height: 400,
    width: 600,
    }
  Plotly.newPlot('state', state, statelayout);
})


