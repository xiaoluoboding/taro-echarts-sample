const withShare = () => Component => class WithShare extends Component {
  onShareAppMessage() {
    return {
      title: 'Taro 使用 ECharts 示例',
      path: 'pages/index/index'
    };
  }
}

export default withShare