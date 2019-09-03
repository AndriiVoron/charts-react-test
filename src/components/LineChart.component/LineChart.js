import React from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

const getSeriesXValue = data => {
  // Object.keys(data || {}).reverse();
  const result = data.map( item => item.timestamp);
};

const getSeriesYValue = data => Object.values(data || {}).reverse();

const getOption = (data, lineName) => ({
  title: {
    text: lineName,
    left: 'center',
    top: 10,
    color: '#fff',
  },
  grid: {
    left: 20,
    right: 20,
    top: 50,
    bottom: 10,
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  // xAxis: [
  //   {
  //     type: 'category',
  //     splitLine: {
  //       show: false,
  //     },
  //     boundaryGap: false,
  //     data: getSeriesXValue(state),
  //   },
  // ],
  xAxis: {
    // type: 'category',
    type: 'time',
    splitLine: {
        show: false
    },
    axisLabel: {
      margin: 15,
      color: '#fff',
    },
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value',
    nameTextStyle: {
      fontSize: 12,
      fontWeight: 'bold',
    },
    axisLabel: {
      color: '#fff',
    },
  },
  // series: [
  //   {
  //     name: lineName,
  //     type: 'line',
  //     smooth: true,
  //     data: getSeriesYValue(state),
  //   },
  // ],
  series: [{
      data,
      type: 'line'
  }]
});

const LineChart = ({
  data,
  lineName,
}) => {
  return data ? (
    <ReactEcharts
      option={getOption(data, lineName)}
      opts={{ renderer: 'svg' }}
      style={{ width: '100%', height: '400px' }}
    />
  ) : (
    <h3> DATA LOADING </h3>
  );
};

LineChart.defaultProps = {
  lineName: 'Total',
  data: [820, 932, 901, 934, 1290, 1330, 1320],
};

LineChart.propTypes = {
  // data: PropTypes.shape([]),
  data: PropTypes.array,
  lineName: PropTypes.string,
};

export default LineChart;
