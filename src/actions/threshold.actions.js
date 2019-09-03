import {
  SET_THRESHOLD,
} from '../constants/actions';

export const setThreshold = (number) => ({
  type: SET_THRESHOLD,
  payload: number,
})