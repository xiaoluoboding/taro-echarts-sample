import Taro, { Component } from '@tarojs/taro'

import BaseEchart from '../../base-echart'
import DataFactory from '../../data-factory'
import optionHandler from './optionHandler'

@DataFactory({
  chartType: 'pie'
})
export default class PieChart extends Component {

  constructor() {
    super(...arguments)
  }

  getOption = () => {}

  componentWillMount() {
    this.getOption = optionHandler
  }

  render() {
    return (
      <BaseEchart option={this.state.option} />
    )
  }
}
