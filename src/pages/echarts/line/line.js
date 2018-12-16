import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import '../echarts.less'

import LineChart from '../../../components/echarts/packages/line'
import withShare from '../../../decorators/withShare'
import lineData from '../../../constants/lineData'

@withShare()
export default class LinePage extends Component {
  config = {
    navigationBarTitleText: '折线图'
  }

  render() {
    const charts = lineData.map(item => {
      return (
        <View className='at-article__section' key={item.type}>
          <View className='at-article__h3'>{item.title}</View>
          <View className='at-article__p'> {item.desc}</View>
          <View className='at-article__chart chart-area'>
            <LineChart
              style='width: 100%; height: 320px;'
              data={item.data}
              option={item.option}
            />
          </View>
        </View>
      )
    })
    return (
      <View className="page-wrapper">
        <View className="at-article">
          <View className='at-article__h1'>
            折线图<Text className="at-article__subtitle">Line Chart</Text>
          </View>
          <View className='at-article__content'>
            {charts}
          </View>
          <View className='at-article__h2'>
            类似图表
          </View>
          <View className='at-article__content'>
            
          </View>
        </View>
      </View>
    )
  }
}
