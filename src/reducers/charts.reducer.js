import {
  START_FETCHING_DATA,
  ERROR_FETCHING_DATA,
  SUCCESS_NEW_POINT,
} from '../constants/actions';

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

function prepareLine(actualState, newElement){
  return [...actualState, newElement];
}

function prepareBar(actualState, newElement){

  const newPreparedItem = newArrayEl(newElement);
  let addNew = true;
  let unsortedState = actualState.map(curent => {
    if (curent.range.from === newPreparedItem.range.from ) {
      addNew = false;
      curent.count += 1;
    }
    return curent;
  });
  if(addNew){
    unsortedState = [...actualState, newPreparedItem];
  }
  const sorted = unsortedState.sort((a, b) => Compare(a, b));

  return sorted;
}

/* Service Bar Function */
function newArrayEl(item){
  const preKey = item.value - item.value%10;
  return {
    range: {from: preKey, to: preKey + 10},
    count: 1
  };
}

function Compare(a, b){
  try {
    return a.range.from - b.range.from;
  }
  catch (e) {
    return 0;
  } 
}