import {
  START_FETCHING_DATA,
  ERROR_FETCHING_DATA,
  SUCCESS_NEW_POINT,
} from '../constants/actions';

export const requestData = () => ({
  type: START_FETCHING_DATA
});
export const successData = payload => {
  return {
    type: SUCCESS_NEW_POINT,
    payload
  };
};
export const failureData = err => ({
  type: ERROR_FETCHING_DATA,
  err
});

export const getChartsData = options => async dispatch => {  
  dispatch(requestData());
  const { socket } = options;
  delete options.socket;
  try { 
    socket.emit(START_FETCHING_DATA, options);
  } catch (err) {
    dispatch(failureData(err));
  }
};