import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import '../echarts.less'

import LineChart from '../../../components/echarts/packages/line'
import withShare from '../../../decorators/withShare';

@withShare()
export default class LinePage extends Component {
  config = {
    navigationBarTitleText: '折线图'
  }

  state = {
    chartData: {
      dimensions: {
        name: 'Week',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      measures: [
        {
          name: 'A商品',
          type: 'line',
          smooth: true,
          data: [18, 36, 65, 30, 78, 40, 33]
        }, {
          name: 'B商品',
          type: 'line',
          smooth: true,
          data: [12, 50, 51, 35, 70, 30, 20]
        }, {
          name: 'C商品',
          type: 'line',
          smooth: true,
          data: [10, 30, 31, 50, 40, 20, 10]
        }
      ]
    }
  }

  onChangeOption () {
    console.log('change data')
    // const color = [ '#207722', '#68b133', '#a9de83', '#f63629', '#f66258', '#ffc0af' ]
    this.setState({
      chartData: {
        dimensions: {
          name: 'Week',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        measures: [{
          name: '销量',
          data: [20, 80, 51, 90, 80, 30, 20]
        }]
      }
    })
  }

  render() {
    return (
      <View className='chart-area'>
        <LineChart style='margin-top: 100px; width: 100%; height: 320px;' data={this.state.chartData} />
        <AtButton style='margin-bottom: 64px;' onClick={this.onChangeOption}>更改数据</AtButton>
      </View>
    )
  }
}
