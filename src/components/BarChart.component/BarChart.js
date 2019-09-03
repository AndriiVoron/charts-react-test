import ReactEcharts from 'echarts-for-react';
import PropTypes from 'prop-types';
import React from 'react';

const getOption = (data, lineName) => ({
  legend: {
    show: false,
    data: [{ name: lineName }],
    top: 5,
  },
  grid: {
    left: '3%',
    right: 20,
    top: 30,
    bottom: 10,
    containLabel: true,
  },
  // legend: {
  //   top: 25,
  // },
  // title: {
  //   text: Utils.getTitle(data),
  //   left: 'center',
  //   top: 10,
  // },
  // tooltip: {
  //   trigger: 'axis',
  //   axisPointer: {
  //     type: 'shadow',
  //   },
  // },
  // xAxis: {
  //   type: 'category',
  //   data: Utils.getXAxis(data, 'suppliers'),
  //   axisTick: {
  //     alignWithLabel: true,
  //   },
  //   axisLabel: { rotate: 40, interval: 0 },
  // },
  // yAxis: {
  //   type: 'value',
  //   axisLabel: {
  //     formatter: Utils.formatYAxis,
  //   },
  // },
  // dataset: {
  //   dimensions: Utils.getDimension(data),
  //   source,
  // },
  // series: Utils.getDataSeriesBar(data),
  xAxis: {
      type: 'category',
      data: ['-10 - 0', '0 - 10', '10 - 20', '20 - 30', '30 - 40', '40 - 50', '50 - 60']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
  }]
});

const BarChart = ({
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

BarChart.defaultProps = {
  lineName: 'Total',
  data: [820, 932, 901, 934, 1290, 1330, 1320],
};

BarChart.propTypes = {
  // data: PropTypes.shape([]),
  data: PropTypes.array,
  lineName: PropTypes.string,
};  

export default BarChart;
