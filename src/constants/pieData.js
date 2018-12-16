const pieData = [{
  type: 'basic',
  title: '基础饼图',
  desc: '饼图主要用于展现不同类别数值相对于总数的占比情况。图中每个分块（扇区）的弧长表示该类别的占比大小，所有分块数据总和为100%。',
  data: {
    dimensions: {
      name: '城市',
      data: ['北京', '武汉', '杭州', '广州', '上海']
    },
    measures: [{
      name: '占比',
      data: [55, 20, 10, 20, 38]
    }]
  },
  option: {
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#92CEFF", "#6084E0"],
    tooltip: {},
    series: [{
      type: 'pie',
      label: {
        normal: {
          fontSize: 14
        }
      },
      center: ['50%', '50%'],
      radius: [0, '50%'],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 2, 2, 0.3)'
        }
      }
    }]
  }
}]

export default pieData