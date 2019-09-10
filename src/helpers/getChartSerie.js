function getChartSerie(data, keyName){
  return data.map( item => item[keyName]);
}

export default getChartSerie;
