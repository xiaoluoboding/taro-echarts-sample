import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import isEqual from 'fast-deep-equal';

import * as echarts from '../ec-canvas/echarts.min';

import './base-echart.less';

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

  componentDidMount() {
    this.initChart(this.props.option)
  }

  componentDidUpdate(prevProps) {
    // if option changed, rerender echart
    if (!isEqual(prevProps.option, this.props.option)) {
      console.log('rerender echart')
      this.initChart(this.props.option)
      return;
    }
    if (super.componentDidUpdate) {
      super.componentDidUpdate();
    }
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
  option: PropTypes.object.isRequired
};

BaseEchart.defaultProps = {
  option: {}
};