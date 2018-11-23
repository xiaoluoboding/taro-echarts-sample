import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
// import { AtButton } from 'taro-ui'

import './index.less'

import { CHART_TYPES } from '../../constants/charts'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  gotoEcharts(type) {
    Taro.navigateTo({
      url: `/pages/echarts/${type}/${type}`
    })
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const chartInfo = CHART_TYPES.map(item => {
      return (
        <View key={item.type} class='flex-item echarts' onClick={this.gotoEcharts.bind(this, item.type)}>
          <Image className='echarts-img' src={item.img}></Image>
          <Text className='echarts-name'>{item.name}</Text>
        </View>
      )
    })
    return (
      <View className='index'>
        <View className='title'>Taro ECharts 示例</View>
        <View className='main'>
          <View className='wrapper flex-wrap'>
            {chartInfo}
          </View>
        </View>
      </View>
    )
  }
}

