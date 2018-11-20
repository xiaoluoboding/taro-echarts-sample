import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  gotoEcharts() {
    Taro.navigateTo({
      url: '/pages/echarts/echarts'
    })
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View className='title'>与小程序原生融合的各种示例</View>
        <View className='main'>
          <View className='wrapper'>
            <AtButton type='primary' onClick={this.gotoEcharts}>echarts-for-weixin 示例</AtButton>
          </View>
        </View>
      </View>
    )
  }
}

