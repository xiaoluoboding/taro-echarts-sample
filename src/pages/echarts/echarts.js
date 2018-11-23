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

  // state = {
  //   ec: {
  //     onInit: initChart
  //   }
  // }

  render() {
    return (
      <View className='echarts'>
        <ec-canvas id='mychart-dom-area' canvas-id='mychart-area' ec={this.state.ec}></ec-canvas>
      </View>
    )
  }
}