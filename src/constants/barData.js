const barData = [
  {
    type: 'basic',
    title: '基础柱状图',
    desc: '柱状图是最常见的图表类型，通过使用水平或垂直方向柱子的高度来显示不同类别的数值，其中柱状图的一个轴显示正在比较的类别，而另一个轴代表对应的刻度值。',
    data: {
      dimensions: {
        name: 'Week',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      measures: [{
        name: 'Data',
        type: 'bar',
        data: [10, 52, 200, 334, 390, 330, 220]
      }]
    },
    option: {
      color: ['#37A2DA'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        axisTick: {
          alignWithLabel: true
        }
      }],
      yAxis: [{
        type: 'value'
      }]
    }
  }
]

export default barData