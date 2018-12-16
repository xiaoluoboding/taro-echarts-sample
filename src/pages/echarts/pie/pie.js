import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import '../echarts.less'

import PieChart from '../../../components/echarts/packages/pie'
import withShare from '../../../decorators/withShare'
import pieData from '../../../constants/pieData'

@withShare()
export default class LinePage extends Component {
  config = {
    navigationBarTitleText: '饼图'
  }

  render() {
    const charts = pieData.map(item => {
      return (
        <View className="at-article__section" key={item.type}>
          <View className="at-article__h3">{item.title}</View>
          <View className="at-article__p"> {item.desc}</View>
          <View className="at-article__chart chart-area">
            <PieChart
              style="width: 100%; height: 320px;"
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
          <View className="at-article__h1">
            饼图<Text className="at-article__subtitle">Line Chart</Text>
          </View>
          <View className="at-article__content">{charts}</View>
          <View className="at-article__h2">类似图表</View>
          <View className="at-article__content" />
        </View>
      </View>
    )
  }
}
