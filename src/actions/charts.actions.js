import {
  START_FETCHING_DATA,
  ERROR_FETCHING_DATA,
  SUCCESS_NEW_POINT,
} from '../constants/actions';
import socketIO from 'socket.io-client';

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

export const requestData = () => async dispatch => {
  const socket = socketIO('http://localhost:3030');
  socket.on('data', (data) => {
    dispatch(successData(data));
  });
  socket.on('error', (error) => {
    socket.disconnect();
    dispatch(failureData(error));
  });
};

export const getChartsData = options => async dispatch => {
  dispatch(requestData());
  const {
    socket
  } = options;
  delete options.socket;
  try {
    socket.emit(START_FETCHING_DATA, options);
  } catch (err) {
    dispatch(failureData(err));
  }
};