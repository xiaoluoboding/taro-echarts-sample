import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import _ from 'lodash'

import * as echarts from '../ec-canvas/echarts.min';
import { getDataset } from './utils'

import './base-echart.less'

export default class BaseEchart extends Component {
  config = {
    navigationBarTitleText: 'Base ECharts',
    usingComponents: {
      'ec-canvas': '../ec-canvas/ec-canvas'
    }
  }

  constructor(props) {
    super(props)
  }

  state = {
    domId: 'echarts-dom-area',
    canvasId: 'echarts-type-area',
    ec: {
      lazyLoad: true
    }
  }

  // 构建option
  getOption(data, option) {
    console.log(option)
    console.log(_.isEmpty(data))
    return {
      ...option,
      dataset: !_.isEmpty(data) && getDataset(data)
    }
  }
  
  // 初始化echart
  initChart(option) {
    this.baseEchart.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width,
        height
      });

      chart.setOption(option);

      return chart;
    })
  }

  componentDidMount () {
    const { data, option } = this.props
    const chartOption = this.getOption(data, option)
    this.initChart(chartOption)
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

BaseEchart.propTypes = {
  data: PropTypes.object.isRequired,
  option: PropTypes.object.isRequired
};

BaseEchart.defaultProps = {
  data: {},
  option: {}
};