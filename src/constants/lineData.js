const lineData = [
  {
    type: 'basic',
    title: '基础折线图',
    desc: '折线图主要用来展示数据相随着时间推移的趋势或变化。 折线图非常适合用于展示一个连续的二维数据， 如某网站访问人数或商品销量价格的波动。',
    data: {
      dimensions: {
        name: 'Week',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      measures: [{
        name: '销量',
        type: 'line',
        data: [20, 80, 51, 90, 80, 30, 20]
      }]
    },
    option: {
      color: ["#37A2DA"],
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false
      },
      yAxis: {
        x: 'center',
        type: 'value',
      }
    }
  },
  {
    type: 'more',
    title: '多条折线图',
    desc: '折线图除了展示某个事情发展的趋势，还可以用来比较多个不同的数据序列。如下图，可以通过对比同时间段的三种商品的销量，分析哪一种商品的销量最好。',
    data: {
      dimensions: {
        name: 'Week',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      measures: [{
        name: 'A商品',
        type: 'line',
        smooth: true,
        data: [18, 36, 65, 30, 78, 40, 33]
      }, {
        name: 'B商品',
        type: 'line',
        smooth: true,
        data: [12, 50, 51, 35, 70, 30, 20]
      }, {
        name: 'C商品',
        type: 'line',
        smooth: true,
        data: [10, 30, 31, 50, 40, 20, 10]
      }]
    },
    option: {
      // color: ['#60ACFC', '#32D3EB', '#5BC49F', '#FEB64D', '#FF7C7C', '#9287E7'],
      color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
      legend: {
        top: 24,
        z: 100
      },
      grid: {
        containLabel: true
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false
      },
      yAxis: {
        x: 'center',
        type: 'value'
      }
    }
  }
]

export default lineData