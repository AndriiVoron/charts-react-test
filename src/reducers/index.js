import { combineReducers } from 'redux';
import { chartsReducer } from './charts.reducer';
import { thresholdReducer } from './threshold.reducer';

const rootReducer = combineReducers({
  chartsState: chartsReducer,
  thresholdState: thresholdReducer,
});

export default rootReducer;
