export default function withECharts(args = {}) {
  return function wrappedComponent(Component) {
    const { initChart } = args;
    return class withECharts extends Component {
      state = {
        ec: {
          onInit: initChart
        }
      }

      render () {
        return super.render()
      }
    };
  };
};