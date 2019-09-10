import customCompare from './customCompare';

// LINES

function getSingleLineData(element){
  try {
    const date = new Date(element.timestamp);
    return {
      timestamp: `${date.getHours()}h ${date.getMinutes()}m ${date.getSeconds()}s`,
      value: element.value.toFixed(3),
    };
  } catch(e) {
    return {
      timestamp: 'error date',
      value: 0,
    }
  }
}

export function prepareLine(actualState, newElement){
  const newValue = getSingleLineData(newElement);

  if (actualState.length < 10) {
    return [...actualState, newValue];
  }
  const sliceArr = actualState.slice(1);
  return [...sliceArr, newValue];
}

// BARS

function newArrayEl(item){
  const preKey = item.value - item.value%10;
  return {
    range: {from: preKey, to: preKey + 10},
    count: 1
  };
}

export function prepareBar(actualState, newElement){

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
  const sorted = unsortedState.sort((a, b) => customCompare(a, b));

  return sorted;
}
