import Taro, { Component } from '@tarojs/taro'

import * as echarts from '../ec-canvas/echarts.min'

import './base-echarts.less'

export default class BaseEchart extends Component {

  constructor(props) {
    super(props)
  }

  config = {
    navigationBarTitleText: 'Base ECharts',
    usingComponents: {
      'ec-canvas': '../ec-canvas/ec-canvas'
    }
  }

  state = {
    domId: 'echarts-dom-area',
    canvasId: 'echarts-type-area',
    ec: {
      lazyLoad: true
    }
  }

  componentDidMount () {
    this.initChart(this.props.option)
  }

  initChart(option) {
    this.baseEchart.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, { width, height });

      chart.setOption(option);

      return chart;
    })
  }

  render() {
    return (
      <ec-canvas
        ref={node => this.baseEchart = node}
        canvas-id={this.state.canvasId}
        ec={this.state.ec}
      />
    )
  }
}