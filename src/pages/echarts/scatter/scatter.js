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

  var data = [];
  var data2 = [];

  for (var i = 0; i < 10; i++) {
    data.push(
      [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 40)
      ]
    );
    data2.push(
      [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)
      ]
    );
  }

  var axisCommon = {
    axisLabel: {
      textStyle: {
        color: '#C8C8C8'
      }
    },
    axisTick: {
      lineStyle: {
        color: '#fff'
      }
    },
    axisLine: {
      lineStyle: {
        color: '#C8C8C8'
      }
    },
    splitLine: {
      lineStyle: {
        color: '#C8C8C8',
        type: 'solid'
      }
    }
  };

  var option = {
    color: ["#FF7070", "#60B6E3"],
    backgroundColor: '#eee',
    xAxis: axisCommon,
    yAxis: axisCommon,
    legend: {
      data: ['aaaa', 'bbbb']
    },
    visualMap: {
      show: false,
      max: 100,
      inRange: {
        symbolSize: [20, 70]
      }
    },
    series: [{
      type: 'scatter',
      name: 'aaaa',
      data: data
    },
    {
      name: 'bbbb',
      type: 'scatter',
      data: data2
    }
    ],
    animationDelay: function (idx) {
      return idx * 50;
    },
    animationEasing: 'elasticOut'
  };


  chart.setOption(option);
  return chart;
}

class Echarts extends Component {
  config = {
    navigationBarTitleText: '散点图',
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
        <ec-canvas id='mychart-dom-scatter' canvas-id='mychart-scatter' ec={this.state.ec}></ec-canvas>
      </View>
    )
  }
}

export default Echarts
