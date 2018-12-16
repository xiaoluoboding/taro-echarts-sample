import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.less'

if (process.env.TARO_ENV === 'weapp') {
  require('taro-ui/dist/weapp/css/index.css')
} else if (process.env.TARO_ENV === 'h5') {
  require('taro-ui/dist/h5/css/index.css')
}

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/echarts/bar/bar',
      'pages/echarts/line/line',
      'pages/echarts/pie/pie',
      'pages/echarts/radar/radar',
      'pages/echarts/gauge/gauge',
      'pages/echarts/heatmap/heatmap',
      'pages/echarts/scatter/scatter',
      'pages/echarts/funnel/funnel'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
