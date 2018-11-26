import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';

import * as echarts from '../ec-canvas/echarts.min';
import dataFactory from './data-factory';

import './base-echart.less';

@dataFactory()
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
    canvasId: 'echarts-type-area',
    ec: {
      lazyLoad: true
    }
  }

  // init echart
  initChart(option) {
    this.baseEchart.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width,
        height
      });

      chart.setOption(option);

      // bind chart instance
      this.chart = chart

      return chart;
    })
  }

  // dispose echart
  dispose() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  componentDidMount () {
    this.init()
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
  data: PropTypes.object,
  option: PropTypes.object.isRequired
};

BaseEchart.defaultProps = {
  data: {},
  option: {}
};