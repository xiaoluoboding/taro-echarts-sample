import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import * as echarts from '../../../components/ec-canvas/echarts.min'

import '../echarts.less'

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  const option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3"],
    series: [{
      name: '业务指标',
      type: 'gauge',
      detail: {
        formatter: '{value}%'
      },
      axisLine: {
        show: true,
        lineStyle: {
          width: 30,
          shadowBlur: 0,
          color: [
            [0.3, '#67e0e3'],
            [0.7, '#37a2da'],
            [1, '#fd666d']
          ]
        }
      },
      data: [{
        value: 40,
        name: '完成率',
      }]

    }]
  };

  chart.setOption(option, true);
  return chart;
}

class Echarts extends Component {
  config = {
    navigationBarTitleText: '仪表盘',
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
        <ec-canvas id='mychart-dom-gauge' canvas-id='mychart-gauge' ec={this.state.ec}></ec-canvas>
      </View>
    )
  }
}

export default Echarts
