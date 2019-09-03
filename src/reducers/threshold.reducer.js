import {
  SET_THRESHOLD,
  RESET_THRESHOLD,
} from '../constants/actions';

const initialState = {
  threshold: 'unset',
}

export function thresholdReducer(state = initialState, action) {
  switch (action.type) {
    case SET_THRESHOLD:
      return {
        ...state,
        threshold: action.payload,
      }
    case RESET_THRESHOLD:
        return {
          ...state,
          threshold: 'unset',
        }
    default:
      return state;
  }
}