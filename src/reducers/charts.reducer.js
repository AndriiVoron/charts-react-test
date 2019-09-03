import {
  START_FETCHING_DATA,
  ERROR_FETCHING_DATA,
  SUCCESS_NEW_POINT,
} from '../constants/actions';

const initialState = {
  data: [],
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
      return {
        ...state,
        data: [...state.data, action.payload],
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
