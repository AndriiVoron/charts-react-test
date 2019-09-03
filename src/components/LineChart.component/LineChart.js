import React from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

const getSeriesXValue = data => {
  const result = data.map( item => {
    const date = new Date(item.timestamp);
    return `${date.getHours()}h ${date.getMinutes()}m ${date.getSeconds()}s`;
  });
  return result;
};

const getSeriesYValue = data => data.map( item => item.value.toFixed(3));

const getOption = (data, lineName) => ({
  title: {
    text: lineName,
    left: 'center',
    top: 20,
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
    formatter: '{b}<br />{c}',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  xAxis: {
    type: 'category',
    axisLabel: {
      margin: 15,
      color: '#ddd',
    },
    data: getSeriesXValue(data),
  },
  yAxis: {
    type: 'value',
    nameTextStyle: {
      fontSize: 12,
      fontWeight: 'bold',
    },
    axisLabel: {
      color: '#ddd',
    },
  },
  series: [{
      data: getSeriesYValue(data),
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
      style={{ width: '100%', height: '400px', marginTop: '30px' }}
    />
  ) : (
    <h3> DATA LOADING </h3>
  );
};

LineChart.defaultProps = {
  lineName: 'Total line',
  data: [],
};

LineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  lineName: PropTypes.string,
};

export default LineChart;
