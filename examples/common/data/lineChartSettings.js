//import echarts from 'echarts'
let lineChartSettings={
  setting1:{
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        label: {
          backgroundColor: 'rgba(14,25,69,.9)',
          borderColor: '#2a92ce',
          borderWidth: 3,
        },
        lineStyle: {
          color: '#0e9ac2',
        },
      },
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '5%',
      top: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2015','2016','2017','2018','2019','2020'],
      axisLabel: {
        color: '#00deff',
      },
      axisLine: {
        lineStyle: {
          color: '#00deff',
        },
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: [{
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#00deff',
        },
      },
      splitLine: {
        lineStyle: {
          color: '#1b357e',
          type: 'dashed',
        },
      },
      axisLabel: {
        color: '#00deff',
      },
      axisTick: {
        show: false,
      },
    }],
    series: [{
      type: 'line',
      stack: '总量',
      smooth: true,
      showSymbol: false,
      label: {
        normal: {
          show: false,
          position: 'top',
        },
      },
      lineStyle: {
        normal: {
          color: '#34cbf6',
        },
      },
      areaStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#082fa2', // 0% 处的颜色
            }, {
              offset: .5, color: 'rgba(8,47,162,.3)',
            }, {
              offset: 1, color: 'transparent', // 100% 处的颜色
            }],
            globalCoord: false, // 缺省为 false
          },
        },
      },
      itemStyle: {
        normal: {
          color: '#34cbf6',
          borderWidth: 1,
        },
      },
      data: [200,245,233,300,369,498]
    }],
  },
}

export {lineChartSettings}