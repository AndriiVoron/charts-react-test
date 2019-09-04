import {
  START_FETCHING_DATA,
  ERROR_FETCHING_DATA,
  SUCCESS_NEW_POINT,
} from '../constants/actions';

const initialState = {
  data: [],
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
      return {
        ...state,
        data,
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

function prepareBar(actionState, newElement){
  /* const unordered =  data.reduce( (obj, item) => {
    const preKey = item.value - item.value%10;
    const key = `${preKey} : ${preKey + 10}`;
    obj[key] = obj[key] ? obj[key] + 1 : 1;
    return obj;
  }, {});

  console.log(unordered);

  return Object.keys(unordered).sort().reduce(
    (rez, key) => {rez[key] = unordered[key]; return rez}, {}
  );
  */
  return [
    {
        range: {from: 0, to: 10},
        count: 5
    },
    {
      range: {from: -10, to: 0},
      count: 3
    },
    
    {
      range: {from: 40, to: 50},
      count: 1
    }
  ];
}