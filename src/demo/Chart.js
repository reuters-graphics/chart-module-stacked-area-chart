import Chart from '../lib/chart.js';
import ChartContainer from './furniture/ChartContainer';
import React from 'react';
import { base } from '@reuters-graphics/style-color/dist/categorical';
import debounce from 'lodash/debounce';
import defaultData from './defaultData.json';

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
      .data(defaultData)
      // .props({ locale: 'es'})
      .draw();

    // Use it again.
    setTimeout(() => {
      this.chart
        // .props({ absolute: true })
        .draw();
    }, 3000);
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
