import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setThreshold } from '../../actions/threshold.actions';
import { requestData,} from '../../actions/charts.actions';
import logo from '../../images/logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';

import ThresholdForm from '../ThresholdForm.component/ThresholdForm';
import LineChart from '../LineChart.component/LineChart';
import BarChart from '../BarChart.component/BarChart';

function checkthreshold(curentState, newState){
  if (curentState === 'unset') return false;
  return newState > curentState;
}
class App extends Component {
  componentDidMount() {
    this.props.startFetchingData();
  }

  render() {
    const {
      
      lineData,
      barData,
      threshold,
      lastPaylod,
      getThreshold,
    } = this.props;
    const showNewData = checkthreshold(threshold, lastPaylod); 
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            some charts test
          </p>
        </header>
        <main className="App-main">
          <Grid container spacing={8}>
            <Grid item xs={12} md={9} lg={8}>
              <ThresholdForm
                action={getThreshold}
                amount={threshold}
              />
            </Grid>
          </Grid>
          <Grid container spacing={8}>
            <Grid item xs={12} md={12} lg={6}>
              <LineChart data={lineData} />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <BarChart data={barData} />
            </Grid>
          </Grid>
          {
            showNewData ?
            (<div className="App-alert-block">payload is {lastPaylod}</div>)
            : null
          }
        </main>
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getThreshold: (data) => dispatch(setThreshold(data)),
    startFetchingData: () => dispatch(requestData()),
  };
};
const mapStateToProps = (store) => {
  const { chartsState, thresholdState } = store;
  const { lastPaylod } = chartsState;
  return {
    lineData: chartsState.lineData,
    barData: chartsState.barData,
    lastPaylod: lastPaylod !== null ? lastPaylod.value : 'loading',
    threshold: thresholdState.threshold,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
