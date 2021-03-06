import ChartComponent from './base/ChartComponent';
import d3 from './utils/d3';
import { uniq, sortBy, findIndex } from 'lodash';
import D3Locale from '@reuters-graphics/d3-locale';
import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';
const client = new AtlasMetadataClient();

class StackedAreaChart extends ChartComponent {
  defaultProps = {
    stroke: '#2f353f',
    stroke_width: 0.5,
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
    highlight_variable: null,
    highlight_color: '#fce587',
    line_height: 1.2,
    hide_key: false,
    interaction: false,
    chart_formats: {
      number: '~s',
      percent: '.0%',
      date: '%b',
      x_axis_ticks: 3,
    },
    range: {
      start_date: null,
      end_date: null,
    },
  };

  draw() {
    const dateParse = d3.timeParse('%Y-%m-%d');
    const data = this.data();
    const props = this.props();
    const node = this.selection().node();
    const locale = new D3Locale(props.locale);
    const formatPer = locale.format(props.chart_formats.percent);
    const formatNum = locale.format(props.chart_formats.number);
    const dateFormat = locale.formatTime(props.chart_formats.date);
    const { width } = node.getBoundingClientRect();
    let reshapedData = [];
    let regionList = uniq(data.map(d => d.region));
    let filtedData = data;
    if (props.range.start_date) {
      const startDate = dateParse(props.range.start_date)
      filtedData = filtedData.filter(d => dateParse(d.date)>=startDate)
    }

    if (props.range.end_date) {
      const endDate = dateParse(props.range.end_date)
      filtedData = filtedData.filter(d => dateParse(d.date)<=endDate)
    }

    const dateWise = d3.nest()
      .key(d => d.date)
      .entries(filtedData);

    dateWise.forEach(function(d, index) {
      d.values.forEach((d) => {
        d.count = d.count < 0 ? 0: d.count;
      });
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

    reshapedData = reshapedData.sort((a, b) => (d3.descending(a.date, b.date)));

    reshapedData.forEach(function(d, index) {
      regionList.forEach((e) => {

        d['mean_' + e] = d3.mean(reshapedData.slice(index, (index + props.avg_days)), f => +f[e]); // avg calc
        if (!d['mean_' + e] || d['mean_' + e]<0) {
          d['mean_' + e] = 0;
        }
        if (index === 0) {
          d['mean_' + e] = d[e];
        }
      });
      d.mean_total = d3.mean(reshapedData.slice(index, (index + props.avg_days)), f => +f.total); // avg calc
      if (!d['mean_total'] || d['mean_total']<0) {
        d['mean_total'] = 0;
      }

      if (index === 0) {
        d.mean_total = d.total;
      }
    });

    const maxData = reshapedData[0];
    const meanList = regionList.map(d => 'mean_' + d);
    regionList = sortBy(meanList, d => (d.split('_')[1] === props.highlight_variable) ? -1000 : +maxData[d]);

    const seriesDeath = d3.stack().keys(regionList)(reshapedData);
    const scaleX = d3.scaleTime()
      .range([0, width - props.margin.left - props.margin.right])
      .domain(d3.extent(reshapedData, d => d.date));

    const scaleYPer = d3.scaleLinear()
      .range([props.height - props.margin.top - props.margin.bottom, 0])
      .domain([0, 1]);

    const scaleYNum = d3.scaleLinear()
      .range([props.height - props.margin.top - props.margin.bottom, 0])
      .domain([0, d3.max(reshapedData, d => d.mean_total)]);

    const areaDeath = d3.area()
      .x(d => scaleX(d.data.date))
      .y0(d => props.absolute ? scaleYNum(d[0]) : (d.data.mean_total>0?(scaleYPer(d[0] / d.data.mean_total)):scaleYPer(0)))
      .y1(d => props.absolute ? scaleYNum(d[1]) : (d.data.mean_total>0?(scaleYPer(d[1] / d.data.mean_total)):scaleYPer(0)))
      .curve(d3.curveMonotoneX);

    const transition = d3.transition()
      .duration(750);

    if (!props.hide_key) {
      const labelContainer = this.selection()
        .appendSelect('div.label-mother-container')
        .appendSelect('div.label-container');

      this.selection().select('.label-mother-container').lower()

      const textUpdate = labelContainer
        .selectAll('.label-text')
        .data(seriesDeath.reverse(), (d, i) => d.key)
        .call(update => update.transition(transition))
        .attr('class', (d, i) => {
          if (d.key.split('_')[1] === props.highlight_variable) {
            return 'highlight label-text';
          } else {
            return 'label-text';
          }
        })
        .style('top', (d, i) => {
          return i * props.line_height + 'rem';
        });

      // enter
      textUpdate.enter()
        .append('div')
        .attr('class', (d, i) => {
          if (d.key.split('_')[1] === props.highlight_variable) {
            return 'highlight label-text';
          } else {
            return 'label-text';
          }
        })
        .style('top', (d, i) => {
          return i * props.line_height + 'rem';
        })
        .on('click', function(d, i) {
          const url = d.key.split('_')[1]
          if (url) {
            navOnClick(url)
          }
        })
        .text(d => client.getRegion(d.key.split('_')[1]).translations[props.locale])
        .call(enter => enter.transition(transition));

      // exit
      textUpdate.exit()
        .call(exit => exit.transition(transition))
        .remove();
      let highlightIndex;
      if (props.highlight_variable) {
        highlightIndex = (findIndex(seriesDeath, d=> d.key.split('_')[1] === props.highlight_variable))  
      } else {
        highlightIndex = -1;
      }

      const labelBox = labelContainer
        .selectAll('.label-box')
        .data(props.fills)
        .style('background', (d, i) => {
          if (i === highlightIndex) {
            return props.highlight_color;
          } else {
            return ((props.fills[i]) ? props.fills[i] : '#000');
          }
        });

      labelBox.enter()
        .append('div')
        .attr('class', 'label-box')
        .style('top', (d, i) => {
          return i * props.line_height + 'rem';
        })
        .style('background', (d, i) => {
          if (i === highlightIndex) {
            return props.highlight_color;
          } else {
            return ((props.fills[i]) ? props.fills[i] : '#000');
          }
        })
        .merge(labelBox);
    } else {
      this.selection()
        .selectAll('.label-mother-container')
        .remove();
    }

    const g = this.selection()
      .appendSelect('svg') // see docs in ./utils/d3.js
      .attr('width', width)
      .attr('height', props.height)
      .appendSelect('g')
      .attr('transform', `translate(${props.margin.left}, ${props.margin.top})`);

    const areaChartPaths = g.appendSelect('g.areas')
      .selectAll('g.area')
      .data(seriesDeath)
      .join('g')
      .attr('class', 'area');

    areaChartPaths.append('path');

    areaChartPaths.select('path')
      .attr('class', function(d) {
        if (d.key.split('_')[1] === props.highlight_variable) {
          return d.key + ' highlight';
        } else {
          return d.key;
        }
      })
      .attr('fill', function(d, i) {
        if (d.key.split('_')[1] === props.highlight_variable) {
          return props.highlight_color;
        } else {
          return ((props.fills[i]) ? props.fills[i] : '#000');
        }
      })
      .transition(transition)
      .attr('fill', function(d, i) {
        if (d.key.split('_')[1] === props.highlight_variable) {
          return props.highlight_color;
        } else {
          return ((props.fills[i]) ? props.fills[i] : '#000');
        }
      })
      .attr('d', areaDeath)
      .attr('stroke', props.stroke)
      .attr('stroke-width', props.stroke_width);

    g.appendSelect('g.axis--y.axis')
      .attr('transform', `translate(${width - props.margin.right - props.margin.left},0)`)
      .transition(transition)
      .attr('transform', `translate(${width - props.margin.right - props.margin.left},0)`)
      .call(d3.axisRight(props.absolute ? scaleYNum : scaleYPer).ticks(3).tickFormat(props.absolute ? formatNum : formatPer));

    g.appendSelect('g.axis--x.axis')
      .attr('transform', `translate(0,${props.height - props.margin.bottom - props.margin.top})`)
      .transition(transition)
      .attr('transform', `translate(0,${props.height - props.margin.bottom - props.margin.top})`)
      .call(d3.axisBottom(scaleX).ticks(props.chart_formats.x_axis_ticks).tickFormat(dateFormat));

    const navOnClick = (regionSlug) => {
      if (props.regionLinks){
        // calling this function will navigate to a region page
        props.regionLinks[regionSlug]();
      }
    };

    const formatNumberJapanese = (num) => {
      return (num >= 1e4) ? locale.format(',.3~s')(num) : locale.format(',')(floor10(num, -1));
    };

    return this;
  }
}

export default StackedAreaChart;
