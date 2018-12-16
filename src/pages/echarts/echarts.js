import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

// import * as echarts from '../../components/ec-canvas/echarts'

import './echarts.less'

export default class BaseEchart extends Component {

  config = {
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'ECharts 使用示例',
    backgroundColor: '#eeeeee',
    backgroundTextStyle: 'light',
    usingComponents: {
      'ec-canvas': '../../components/ec-canvas/ec-canvas'
    }
  }

  onChangeOption() {
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
      <View className='echarts'>
        <ec-canvas id='mychart-dom-area' canvas-id='mychart-area' ec={this.state.ec}></ec-canvas>
      </View>
    )
  }
}