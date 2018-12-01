import Taro, { Component } from '@tarojs/taro'

import BaseEchart from '../../base-echart'
import DataFactory from '../../data-factory'

@DataFactory({
  chartType: 'line'
})
export default class PieChart extends Component {

  constructor() {
    super(...arguments)
  }

  getOption = data => {
    return {
      color: ['#60ACFC', '#32D3EB', '#5BC49F', '#FEB64D', '#FF7C7C', '#9287E7'],
      legend: {
        // top: 50,
        left: 'center',
        z: 100
      },
      grid: {
        containLabel: true
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        // show: false
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
        // show: false
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 100
        },
        {
          start: 0,
          end: 100,
          handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
          handleSize: '80%',
          handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
          }
        }
      ]
    }
  }

  render() {
    return (
      <BaseEchart option={this.state.option} />
    )
  }
}
