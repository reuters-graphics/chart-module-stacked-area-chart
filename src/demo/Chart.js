import Chart from '../lib/chart.js';
import ChartContainer from './furniture/ChartContainer';
import React from 'react';
import debounce from 'lodash/debounce';
import cases from './cases.json';
import deaths from './deaths.json';

class ChartComponent extends React.Component {
  state = { width: '' };
  chartContainer = React.createRef();

  // Instantiate and add our chart class to this component.
  chart = new Chart();

  // A resize function to redraw the chart.
  resize = debounce(() => { this.chart.draw(); }, 250);

  componentDidMount() {
    // Use our chart module.
    this.chart
      .selection(this.chartContainer.current)
      .data(cases)
      .props({
        absolute: true,
        // highlight_variable: 'asia',
        // hide_key: true,
        interaction: true,
        range: {
          end_date: '2020-08-10',
          // start_date: '2020-02-01',
        },
        // fills: ['rgba(255,255,255,0.7)',
        //   'rgba(255,255,255,0.7)',
        //   'rgba(255,255,255,0.7)',
        //   'rgba(255,255,255,0.7)',
        //   'rgba(255,255,255,0.7)',
        //   'rgba(255,255,255,0.7)'],
      })
      .draw();

    // setTimeout(() => {
    //   this.chart
    //     .data([30, 50, 30])
    //     .props({ fill: base.blue.hex })
    //     .draw();
    // }, 2000);

    // Add a listener to resize chart with the window.
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    // Remove listener if the component is removed, too.
    window.removeEventListener('resize', this.resize);
  }

  componentDidUpdate() {
    // Update the chart with the component.
    // Can change data or props here, whatever...
    this.chart.draw();
  }

  render() {
    const { width } = this.state;
    return (
      <ChartContainer width={width} setWidth={(width) => this.setState({ width })}>
        {/* This is our chart container 👇 */}
        <div id='chart' ref={this.chartContainer} />
      </ChartContainer>
    );
  }
}

export default ChartComponent;
