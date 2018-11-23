import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import * as echarts from '../../../components/ec-canvas/echarts.min'

import '../echarts.less'

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  })
  canvas.setChart(chart)
  const model = {
    yCates: [...Array(7).keys()],
    xCates: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    // xCates: [...Array(7).keys()].map(v => `11-0${v+1}`),
    data: [
      // [yCateIndex, xCateIndex, value]
      [0, 0, 5], [0, 1, 7], [0, 2, 3], [0, 3, 5], [0, 4, 2], [0, 5, 5], [0, 6, 2],
      [1, 0, 1], [1, 1, 2], [1, 2, 4], [1, 3, 8], [1, 4, 2], [1, 5, 3], [1, 6, 4],
      [2, 0, 2], [2, 1, 3], [2, 2, 8], [2, 3, 6], [2, 4, 7], [2, 5, 1], [2, 6, 6],
      [3, 0, 3], [3, 1, 7], [3, 2, 5], [3, 3, 1], [3, 4, 6], [3, 5, 6], [3, 6, 1],
      [4, 0, 3], [4, 1, 2], [4, 2, 7], [4, 3, 8], [4, 4, 9], [4, 5, 4], [4, 6, 3],
      [5, 0, 2], [5, 1, 2], [5, 2, 3], [5, 3, 4], [5, 4, 7], [5, 5, 2], [5, 6, 5],
      [6, 0, 6], [6, 1, 5], [6, 2, 3], [6, 3, 1], [6, 4, 2], [6, 5, 3], [6, 6, 7],
    ]
  }

  const data = model.data.map(function (item) {
    return [item[1], item[0], item[2] || '-']
  })

  const option = {
    tooltip: {
      position: 'top'
    },
    animation: false,
    grid: {
      bottom: 80,
      top: 10,
      left: 80
    },
    xAxis: {
      type: 'category',
      data: model.xCates,
      splitArea: {
        show: true
      }
    },
    yAxis: {
      type: 'category',
      data: model.yCates,
      splitArea: {
        show: true
      }
    },
    visualMap: {
      min: 1,
      max: 10,
      show: true,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: 20,
      inRange: {
        color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
      }
    },
    series: [{
      name: 'Punch Card',
      type: 'heatmap',
      data: data,
      label: {
        normal: {
          show: true
        }
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  }

  chart.setOption(option)
  return chart
}

class Echarts extends Component {
  config = {
    navigationBarTitleText: 'ECharts 使用示例',
    navigationBarTextStyle: 'black',
    backgroundColor: '#eeeeee',
    backgroundTextStyle: 'light',
    usingComponents: {
      'ec-canvas': '../../../components/ec-canvas/ec-canvas'
    }
  }

  state = {
    ec: {
      onInit: initChart
    }
  }

  render() {
    return (
      <View className='echarts'>
        <ec-canvas id='mychart-dom-heatmap' canvas-id='mychart-heatmap' ec={this.state.ec}></ec-canvas>
      </View>
    )
  }
}

export default Echarts
