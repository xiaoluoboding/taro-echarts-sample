import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import '../echarts.less'

import BaseEchart from '../../../components/echarts/base-echart'
import withShare from '../../../decorators/withShare';

@withShare()
export default class PiePage extends Component {
  config = {
    navigationBarTitleText: '饼图'
  }

  getOption = () => {
    return {
      color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#92CEFF", "#6084E0"],
      legend: {},
      tooltip: {},
      series: [{
        label: {
          normal: {
            fontSize: 14
          }
        },
        type: 'pie',
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

  state = {
    chartData: {
      dimensions: {
        name: '渠道',
        data: ['APP', 'PC', 'M端', '微信', '小程序']
      },
      measures: [{
        name: 'PV',
        data: [40000, 27800, 22000, 20200, 13600]
      }]
    },
    chartOption: this.getOption()
  }

  render() {
    const { chartData, chartOption } = this.state
    return (
      <View className='chart-area'>
        <BaseEchart data={chartData} option={chartOption} />
      </View>
    )
  }
}

