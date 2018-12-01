import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import '../echarts.less'

import PieChart from '../../../components/echarts/packages/pie'
import withShare from '../../../decorators/withShare';

@withShare()
export default class PiePage extends Component {
  config = {
    navigationBarTitleText: '饼图'
  }

  state = {
    chartData: {
      dimensions: {
        name: '城市',
        data: ['北京', '武汉', '杭州', '广州', '上海']
      },
      measures: [{
        name: '占比',
        data: [55, 20, 10, 20, 38]
      }]
    }
  }

  render() {
    const { chartData } = this.state
    return (
      <View className='chart-area'>
        <PieChart
          style='margin-top: 100px; width: 100%; height: 320px;'
          data={chartData}
        />
      </View>
    )
  }
}

