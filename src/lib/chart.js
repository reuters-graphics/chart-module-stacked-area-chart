import ChartComponent from './base/ChartComponent';
import d3 from './utils/d3';
import { uniq } from 'lodash';
import { compareValues } from './utils/utils';
import D3Locale from '@reuters-graphics/d3-locale';
import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';
const client = new AtlasMetadataClient();

class StackedAreaChart extends ChartComponent {
  defaultProps = {
    stroke: '#aaa',
    strokeWidth: 1,
    fills: ['rgba(255,255,255,0.9)',
      'rgba(255,255,255,0.8)',
      'rgba(255,255,255,0.7)',
      'rgba(255,255,255,0.55)',
      'rgba(255,255,255,0.45)',
      'rgba(255,255,255,0.25)'],
    margin: { left: 10, right: 35, top: 20, bottom: 20 },
    height: 300,
    avg_days: 7,
    locale: 'en',
    absolute: false,
  };

  draw() {
    const dateParse = d3.timeParse('%Y-%m-%d');
    const data = this.data();
    const props = this.props();
    const node = this.selection().node();
    const locale = new D3Locale(props.locale);
    const dateFormat = locale.formatTime('%B');
    const dateFormatMobile = locale.formatTime('%b');
    const formatPer = locale.format('.0%');
    const formatNum = locale.format(',');

    const { width } = node.getBoundingClientRect();
    let reshapedData = [];
    const regionList = uniq(data.map(d => d.region));
    const dateWise = d3.nest()
      .key(d => d.date)
      .entries(data);

    dateWise.forEach(function(d, index) {
      const obj = {
        date: dateParse(d.key),
        total: d3.sum(d.values, e => e.count),
      };
      regionList.forEach(e => obj[e] = 0);
      d.values.forEach(function(e) {
        obj[e.region] = e.count;
      });
      reshapedData.push(obj);
    });

    reshapedData = reshapedData.sort(compareValues('date'));

    reshapedData.forEach(function(d, index) {
      regionList.forEach((e) => {
        d['mean_' + e] = d3.mean(reshapedData.slice((index - props.avg_days), index), f => +f[e] ); // avg calc
        if (!d['mean_' + e]) {
          d['mean_' + e] = d3.mean(reshapedData.slice(0, index), f => +f[e]);
        }
        if (index === 0) {
          d['mean_' + e] = d[e];
        }
      });
      d.mean_total = d3.mean(reshapedData.slice((index - props.avg_days), index), f => +f.total); // avg calc
      if (!d.mean_total) {
        d.mean_total = d3.mean(reshapedData.slice(0, index), f => +f.total);
      }

      if (index === 0) {
        d.mean_total = d.total;
      }
    });

    const seriesDeath = d3.stack().keys(regionList.map(d => 'mean_' + d))(reshapedData);
    const scaleX = d3.scaleTime()
      .range([0, width - props.margin.left - props.margin.right])
      .domain(d3.extent(reshapedData, d => d.date));

    const scaleYPer = d3.scaleLinear()
      .range([props.height - props.margin.top - props.margin.bottom, 0])
      .domain([0, 1]);

    const scaleYNum = d3.scaleLinear()
      .range([props.height - props.margin.top - props.margin.bottom, 0])
      .domain([0, d3.max(reshapedData, d => d.mean_total )]);

    const areaDeath = d3.area()
      .x(d => scaleX(d.data.date))
      .y0(d => props.absolute ? scaleYNum(d[0]) : scaleYPer(d[0] / d.data.mean_total))
      .y1(d => props.absolute ? scaleYNum(d[1]) : scaleYPer(d[1] / d.data.mean_total))
      .curve(d3.curveMonotoneX);

    const transition = d3.transition()
      .duration(750);

    const labels = this.selection()
      .appendSelect('div.label-container')
      .selectAll('div.label')
      .data(seriesDeath, (d, i) => d.key);

    const labelInner = labels.enter()
      .append('div')
      .attr('class', 'label')
      .merge(labels);

    labelInner.appendSelect('div.label-box')
      .style('background', (d, i) => props.fills[i]);

    labelInner.appendSelect('div.label-text')
      .text(d => client.getRegion(d.key.split('_')[1]).translations[props.locale]);

    labels.exit()
      .remove();

    const g = this.selection()
      .appendSelect('svg') // see docs in ./utils/d3.js
      .attr('width', width)
      .attr('height', props.height)
      .appendSelect('g')
      .attr('transform', `translate(${props.margin.left}, ${props.margin.top})`);

    const deathChartPaths = g.appendSelect('g.areas')
      .selectAll('g.area')
      .data(seriesDeath)
      .join('g')
      .attr('class', 'area');

    deathChartPaths.append('path')
      .attr('fill', function(d, i) {
        return ((props.fills[i]) ? props.fills[i] : '#000');
      });

    deathChartPaths.select('path')
      .attr('class', d => d.key)
      .transition(transition)
      .attr('d', areaDeath)
      .attr('stroke', '#212121')
      .attr('stroke-width', '.5');

    g.appendSelect('g.axis--y')
      .attr('class', 'axis--y axis')
      .transition(transition)
      .attr('transform', `translate(${width - props.margin.right - props.margin.left},0)`)
      .call(d3.axisRight(props.absolute ? scaleYNum : scaleYPer).ticks(3).tickFormat(props.absolute ? formatNum : formatPer));

    g.appendSelect('g.axis--x')
      .attr('class', 'axis--x axis')
      .transition(transition)
      .attr('transform', `translate(0,${props.height - props.margin.bottom - props.margin.top})`)
      .call(d3.axisBottom(scaleX).ticks(4).tickFormat(width < 500 ? dateFormatMobile : dateFormat));

    return this;
  }
}

export default StackedAreaChart;
