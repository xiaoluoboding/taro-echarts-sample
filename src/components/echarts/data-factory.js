import isEmpty from 'lodash.isempty';
import isEqual from 'fast-deep-equal';

import { getDataset } from './utils';

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

      state = {
        option: {}
      }

      getSeries = data => {
        if (data && data.dimensions && data.measures) {
          const { dimensions, measures } = data
          return measures.map(({ name, data, type, ...rest}, index) => {
            return {
              ...rest,
              type: chartType
            }
          })
        }
      }

      init() {
        const { data } = this.props
        const optionWithoutData = this.getOption(data)
        const { series } = optionWithoutData
        const option = {
          ...optionWithoutData,
          series: this.getSeries(data, series),
          dataset: !isEmpty(data) && getDataset(data)
        }
        console.log(JSON.stringify(option))
        this.setState({
          option
        })
      }

      componentDidMount() {
        this.init()
      }

      componentDidUpdate(prevProps) {
        // if data changed, rebuild option
        if (!isEqual(prevProps.data, this.props.data)) {
          this.init()
          return;
        }
        if (super.componentDidUpdate) {
          super.componentDidUpdate();
        }
      }

      render() {
        return super.render()
      }
    };
  };
};