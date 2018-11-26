import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import '../echarts.less'

import BaseEchart from '../../../components/echarts/base-echart'
import withShare from '../../../decorators/withShare';

@withShare()
export default class LinePage extends Component {
  config = {
    navigationBarTitleText: '折线图'
  }

  getOption = () => {
    return {
      color: ['#60ACFC', '#32D3EB', '#5BC49F', '#FEB64D', '#FF7C7C', '#9287E7'],
      legend: {
        data: ['A', 'B', 'C'],
        // top: 50,
        left: 'center',
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
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        // show: false
      },
      yAxis: {
        x: 'center',
        type: 'value',
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
        // show: false
      },
      dataZoom: [{
        type: 'inside',
        start: 0,
        end: 100
      }, {
        start: 0,
        end: 100,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
          color: '#fff',
          shadowBlur: 3,
          shadowColor: 'rgba(0, 0, 0, 0.6)',
          shadowOffsetX: 2,
          shadowOffsetY: 2
        }
      }],
      series: [
        {
          name: 'A',
          type: 'line',
          smooth: true,
          data: [18, 36, 65, 30, 78, 40, 33]
        }, {
          name: 'B',
          type: 'line',
          smooth: true,
          data: [12, 50, 51, 35, 70, 30, 20]
        }, {
          name: 'C',
          type: 'line',
          smooth: true,
          data: [10, 30, 31, 50, 40, 20, 10]
        }
      ]
    };
  }

  state = {
    option: this.getOption()
  }

  onChangeOption () {
    console.log('change option')
    const color = [ '#207722', '#68b133', '#a9de83', '#f63629', '#f66258', '#ffc0af' ]
    this.setState({
      option: {
        ...this.state.option,
        color
      }
    })
  }

  render() {
    return (
      <View className='chart-area'>
        <BaseEchart style='margin-top: 100px; height: 320px;' option={this.state.option} />
        <AtButton onClick={this.onChangeOption}>更换颜色</AtButton>
      </View>
    )
  }
}
