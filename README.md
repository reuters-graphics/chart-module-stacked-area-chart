![](./badge.svg)

# StackedAreaChart

### Install

```
$ yarn add @reuters-graphics/chart-module-stacked-area-chart
```

### Use

```javascript
import StackedAreaChart from '@reuters-graphics/chart-module-stacked-area-chart';

const myChart = new StackedAreaChart();

// To create your chart, pass a selector string to the chart's selection method,
// as well as any props or data to their respective methods. Then call draw.
myChart
  .selection('#chart')
  .data(
    // the data format needs a time series where the objects have 
    // a date, count and region variable
    [{"date":"2020-07-07","count":553,"reporting":[7,51],"region":"asia"},
    {"date":"2020-07-07","count":0,"reporting":[24,25],"region":"oceania"}]
  )
  .props({
    stroke: '#2f353f', // Stroke of the area blocks
    
    stroke_width: .5, // Stroke width of the area blocks

    // fills need to be an array of all the colours in
    // your area chart. Sorted from bottom to top.
    fills: ['rgba(255,255,255,0.9)', 
      'rgba(255,255,255,0.8)',
      'rgba(255,255,255,0.7)',
      'rgba(255,255,255,0.55)',
      'rgba(255,255,255,0.45)',
      'rgba(255,255,255,0.25)'],

    // Chart margins
    margin: { left: 10, right: 35, top: 20, bottom: 20 },

    // Chart height
    height: 300,

    // How many days rolling average 
    avg_days: 7,

    // The locale is used to format numbers, dates 
    // and region names
    locale: 'en',

    // False by default. Changing to true will show 
    // the split with absolute numbers
    absolute: false,
  })
  .draw();

// You can call any method again to update the chart.
myChart
  .data([
    {"date":"2020-07-07","count":553,"reporting":[7,51],"region":"north-america"},
    {"date":"2020-07-07","count":0,"reporting":[24,25],"region":"oceania"}
  ])
  .draw();

// Or just call the draw function alone, which is useful for resizing the chart.
myChart.draw();
```

To apply this chart's default styles when using SCSS, simply define the variable `$StackedAreaChart-container` to represent the ID or class of the chart's container(s) and import the `_chart.scss` partial.

```CSS
$StackedAreaChart-container: '#chart';

@import '~@reuters-graphics/chart-module-stackedareachart/scss/main';
```

## Developing chart modules

Read more in the [DEVELOPING docs](./DEVELOPING.md) about how to write your chart module.
