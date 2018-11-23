import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import * as echarts from '../../../components/ec-canvas/echarts'

import '../echarts.less'

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  const option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#92CEFF", "#6084E0"],
    series: [{
      label: {
        normal: {
          fontSize: 14
        }
      },
      type: 'pie',
      center: ['50%', '50%'],
      radius: [0, '60%'],
      data: [{
        value: 55,
        name: '北京'
      }, {
        value: 20,
        name: '武汉'
      }, {
        value: 10,
        name: '杭州'
      }, {
        value: 20,
        name: '广州'
      }, {
        value: 38,
        name: '上海'
      },
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 2, 2, 0.3)'
        }
      }
    }]
  };

  chart.setOption(option);
  return chart;
}

class Echarts extends Component {
  config = {
    navigationBarTitleText: '饼图',
    navigationBarTextStyle: 'black',
    backgroundColor: '#eeeeee',
    backgroundTextStyle: 'light',
    usingComponents: {
      'ec-canvas': '../../../components/ec-canvas/ec-canvas' // 书写第三方组件的相对路径
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
        <ec-canvas id='mychart-dom-pie' canvas-id='mychart-pie' ec={this.state.ec}></ec-canvas>
      </View>
    )
  }
}

export default Echarts
