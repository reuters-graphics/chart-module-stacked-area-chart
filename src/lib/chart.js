import ChartComponent from './base/ChartComponent';
import d3 from './utils/d3';
import defaultData from './defaultData.json';
import {uniq} from 'lodash'
import { compareValues }  from "./utils/utils"
import { pistachio } from '@reuters-graphics/style-color/dist/sequential';

class StackedAreaChart extends ChartComponent {

  defaultProps = {
    stroke: '#aaa',
    strokeWidth: 1,
    fills: pistachio,
    height: 300,
    avg_days: 7
  };
  
  defaultData = defaultData;

  draw() {
    let dateParse = d3.timeParse("%Y-%m-%d");
    const margin = {left: 10, right: 35, top: 20, bottom: 20}
    const data = this.data();
    const props = this.props();
    const node = this.selection().node();
    const { width } = node.getBoundingClientRect();
    let reshapedData = []
    let regionList = uniq(data.map(d=>d.region))
    let dateWise = d3.nest()
                      .key(d=>d.date)
                      .entries(data)
    console.log(props.fills)

    dateWise.forEach(function(d,index){
        let obj = {
          date: dateParse(d.key),
          total: d3.sum(d.values,e=>e.count)
        }
        regionList.forEach(e=>obj[e]=0)
        d.values.forEach(function(e){
          obj[e.region] = e.count
        })
        reshapedData.push(obj)
    })

    reshapedData = reshapedData.sort(compareValues('date'))

    reshapedData.forEach(function(d,index){
      regionList.forEach((e)=>{
        d['mean_'+e] = d3.mean(reshapedData.slice((index-props.avg_days),index),f=>+f[e]) // avg calc 
        if (!d['mean_'+e]){
          d['mean_'+e]=d3.mean(reshapedData.slice(0,index),f=>+f[e])
        }
        if(index==0){
          d['mean_'+e]=d[e]
        }
      })

      d['mean_total'] = d3.mean(reshapedData.slice((index-props.avg_days),index),f=>+f['total']) // avg calc 
      if (!d['mean_total']){
          d['mean_total']=d3.mean(reshapedData.slice(0,index),f=>+f['total'])
      }

      if (index==0){
          d['mean_total']=d['total']
      }
    })


    let seriesDeath = d3.stack().keys(regionList.map(d=>'mean_'+d))(reshapedData)
    let scaleX = d3.scaleTime()
                    .range([0, width-margin.left- margin.right])
                    .domain(d3.extent(reshapedData,d=>d.date))

    let scaleY = d3.scaleLinear()
                    .range([props.height-margin.top-margin.bottom, 0])
                    .domain([0, 100])

    let areaDeath = d3.area()
                      .x(d=>scaleX(d.data.date) )
                      .y0(d=>scaleY((d[0]/d.data.mean_total)*100))
                      .y1(d=>scaleY((d[1]/d.data.mean_total)*100))
                      .curve(d3.curveMonotoneX)

    const transition = d3.transition()
                          .duration(750);

    const g = this.selection()
                  .appendSelect('svg') // see docs in ./utils/d3.js
                  .attr('width', width)
                  .attr('height', props.height)
                  .appendSelect('g')
                  .attr('transform', `translate(${margin.left}, ${margin.top})`);

    let deathChartPaths =   g.appendSelect("g.areas")
            .selectAll("path")
            .data(seriesDeath)
            .join("path")
            .attr("class", d => d.key)
            .attr("d", areaDeath)
            .attr('fill',function(d,i){
                return ((props.fills.all[i])?props.fills.all[i].hex:'#000')
            })
            // .attr('opacity',(d,i)=>variables[i])
            .attr('stroke','#212121')
            .attr('stroke-width','.5')

    g.appendSelect('g.axis--y')
      .attr('class','axis--y axis')
      .transition(transition)
      .attr('transform',`translate(${width-margin.right-margin.left},0)`)
      .call(d3.axisRight(scaleY).ticks(props.bars?3:1))

    g.appendSelect('g.axis--x')
      .attr('class','axis--x axis')
      .transition(transition)
      .attr('transform',`translate(0,${props.height-margin.bottom-margin.top})`)
      .call(d3.axisBottom(scaleX))

    return this;
  }
}

export default StackedAreaChart;
