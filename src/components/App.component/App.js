import React, { Component } from 'react';
import { connect } from 'react-redux';
import { subscribeToData } from '../../services/api.services'
import { setThreshold } from '../../actions/threshold.actions';
import { getChartsData, successData, failureData } from '../../actions/charts.actions';
import logo from '../../images/logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';

import ThresholdForm from '../ThresholdForm.component/ThresholdForm';
import LineChart from '../LineChart.component/LineChart';
import BarChart from '../BarChart.component/BarChart';

class App extends Component {
  constructor(props) {
    super(props);
    subscribeToData(this.props.getData, this.props.getErrorData);
  }

  componentDidMount() {   
    this.props.getChartsData({ socket: this.socket }); 
  }

  render() {
    const {
      chartsData,
      threshold,
      counterAdd,
    } = this.props;
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
                action={counterAdd}
                amount={threshold}
              />
            </Grid>
          </Grid>
          <Grid container spacing={8}>
            <Grid item xs={12} md={12} lg={6}>
              <LineChart data={chartsData} />
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <BarChart data={chartsData} />
            </Grid>
          </Grid>
        </main>
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    counterAdd: (data) => dispatch(setThreshold(data)),
    getData: (data) => dispatch(successData(data)),
    getErrorData: (err) => dispatch(failureData(err)),
    getChartsData: (options) => dispatch(getChartsData(options)),
  };
};
const mapStateToProps = (store) => {
  const { chartsState, thresholdState } = store;
  return {
    chartsData: chartsState.data,
    threshold: thresholdState.threshold,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
