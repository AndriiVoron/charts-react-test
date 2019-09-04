import ReactEcharts from 'echarts-for-react';
import PropTypes from 'prop-types';
import React from 'react';

const getSeriesXValue = data => {
  const result = data.map( item => {
    const { range } = item;
    return `${range.from} : ${range.to}`;
  });
  return result;
};

const getSeriesYValue = data => data.map( item => item.count);

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
    data: getSeriesXValue(data)
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
    type: 'bar'
  }]
});

const BarChart = ({
  data,
  lineName,
}) => {
  return data.length > 0 ? (
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
  lineName: 'Category group',
  data: [],
};

BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  lineName: PropTypes.string,
};  

export default BarChart;
