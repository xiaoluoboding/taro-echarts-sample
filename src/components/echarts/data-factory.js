import isEmpty from 'lodash.isempty'
import isEqual from 'fast-deep-equal';

import { getDataset } from './utils'

export default function dataFactory(args = {}) {
  return function wrappedComponent(Component) {
    const { chartType } = args
    return class DataFactory extends Component {
      static defaultProps = {
        data: {},
        option: {}
      }
      
      constructor() {
        super(...arguments);
      }

      // build option
      getOption(data, option) {
        return {
          ...option,
          dataset: !isEmpty(data) && getDataset(data)
        }
      }

      init () {
        const { data, option } = this.props
        const chartOption = this.getOption(data, option)
        this.initChart(chartOption)
      }

      componentDidUpdate(prevProps) {
        // if data or option changed, rebuild option
        if (
          !isEqual(prevProps.data, this.props.data) ||
          !isEqual(prevProps.option, this.props.option)
        ) {
          console.log('factory option is changed')
          this.init();
          return;
        }
        if (super.componentWillUpdate) {
          super.componentWillUpdate();
        }
      }

      render() {
        return super.render()
      }
    };
  };
};