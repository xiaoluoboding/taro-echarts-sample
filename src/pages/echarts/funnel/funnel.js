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

  var option = {
    backgroundColor: "#ffffff",
    color: ['#60ACFC', '#32D3EB', '#5BC49F', '#FEB64D', '#FF7C7C', '#9287E7'],
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c}%"
    },
    legend: {
      orient: 'vertical',
      left: 10,
      data: ['展现', '点击', '访问', '咨询', '订单']
    },
    calculable: true,
    series: [
      {
        name: '漏斗图',
        type: 'funnel',
        width: '40%',
        height: '45%',
        left: '5%',
        top: '50%',
        data: [{ value: 100, name: '展现' },
        { value: 80, name: '点击' },
        { value: 60, name: '访问' },
        { value: 30, name: '咨询' },
        { value: 10, name: '订单' },

        ]
      },
      {
        name: '金字塔',
        type: 'funnel',
        width: '40%',
        height: '45%',
        left: '5%',
        top: '5%',
        sort: 'ascending',
        data: [
          { value: 60, name: '访问' },
          { value: 30, name: '咨询' },
          { value: 10, name: '订单' },
          { value: 80, name: '点击' },
          { value: 100, name: '展现' }
        ]
      },
      {
        name: '漏斗图',
        type: 'funnel',
        width: '40%',
        height: '45%',
        left: '55%',
        top: '5%',
        label: {
          normal: {
            position: 'left'
          }
        },
        data: [
          { value: 60, name: '访问' },
          { value: 30, name: '咨询' },
          { value: 10, name: '订单' },
          { value: 80, name: '点击' },
          { value: 100, name: '展现' }
        ]
      },
      {
        name: '金字塔',
        type: 'funnel',
        width: '40%',
        height: '45%',
        left: '55%',
        top: '50%',
        sort: 'ascending',
        label: {
          normal: {
            position: 'left'
          }
        },
        data: [
          { value: 60, name: '访问' },
          { value: 30, name: '咨询' },
          { value: 10, name: '订单' },
          { value: 80, name: '点击' },
          { value: 100, name: '展现' }
        ]
      }
    ]
  };


  chart.setOption(option);
  return chart;
}

class Echarts extends Component {
  config = {
    navigationBarTitleText: '漏斗图',
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
        <ec-canvas id='mychart-dom-funnel' canvas-id='mychart-funnel' ec={this.state.ec}></ec-canvas>
      </View>
    )
  }
}

export default Echarts
