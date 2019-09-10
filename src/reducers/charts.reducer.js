import {
  START_FETCHING_DATA,
  ERROR_FETCHING_DATA,
  SUCCESS_NEW_POINT,
} from '../constants/actions';

import { prepareLine, prepareBar } from '../helpers/chartReduserHelpers';

const initialState = {
  data: [],
  lineData: [],
  barData: [],
  lastPaylod: null,
  isFetching: true,
  error: null
};

export function chartsReducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_DATA:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case SUCCESS_NEW_POINT:
      const data = [...state.data, action.payload];
      const barData = prepareBar(state.barData, action.payload);
      const lineData = prepareLine(state.lineData, action.payload);
      return {
        ...state,
        data,
        lineData,
        barData,
        lastPaylod: action.payload,
        isFetching: false
      };
    case ERROR_FETCHING_DATA:
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    default:
      return state;
  }
};
