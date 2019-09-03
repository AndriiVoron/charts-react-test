import ReactEcharts from 'echarts-for-react';
import PropTypes from 'prop-types';
import React from 'react';

const getDataSeriesBar = data => {
  // const result = data.map( item => {
  //   const date = new Date(item.timestamp);
  //   return `${date.getHours()}h ${date.getMinutes()}m ${date.getSeconds()}s`;
  // });
  // return result;
  return [1, 10, 4, 6, 3, 9, 2];
};

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
    formatter: '{c}',
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
    data: ['-10 - 0', '0 - 10', '10 - 20', '20 - 30', '30 - 40', '40 - 50', '50 - 60']
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
    data: getDataSeriesBar(data),
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
      style={{ width: '100%', height: '400px', marginTop: '30px' }}
    />
  ) : (
    <h3> DATA LOADING </h3>
  );
};

BarChart.defaultProps = {
  lineName: 'Total',
  data: [],
};

BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  lineName: PropTypes.string,
};  

export default BarChart;
