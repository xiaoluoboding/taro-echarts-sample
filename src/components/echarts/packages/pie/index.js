import Taro, { Component } from '@tarojs/taro'

import BaseEchart from '../../base-echart'
import DataFactory from '../../data-factory'

@DataFactory({
  chartType: 'pie'
})
export default class PieChart extends Component {

  constructor() {
    super(...arguments)
  }

  getOption = data => {
    return {
      color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#92CEFF", "#6084E0"],
      tooltip: {},
      series: [{
        label: {
          normal: {
            fontSize: 14
          }
        },
        center: ['50%', '50%'],
        radius: [0, '50%'],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 2, 2, 0.3)'
          }
        }
      }]
    };
  }

  render() {
    return (
      <BaseEchart option={this.state.option} />
    )
  }
}
