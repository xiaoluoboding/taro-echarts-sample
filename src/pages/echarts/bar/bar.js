import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import '../echarts.less'

import BarChart from '../../../components/echarts/packages/bar'
import withShare from '../../../decorators/withShare'
import barData from '../../../constants/barData'

@withShare()
export default class BarPage extends Component {
  config = {
    navigationBarTitleText: '柱状图'
  }

  render() {
    const charts = barData.map(item => {
      return (
        <View className='at-article__section' key={item.type}>
          <View className='at-article__h3'>{item.title}</View>
          <View className='at-article__p'> {item.desc}</View>
          <View className='at-article__chart chart-area'>
            <BarChart
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
            柱状图<Text className="at-article__subtitle">Bar Chart</Text>
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
