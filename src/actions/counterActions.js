import * as types from '../constants/actionTypes';

export function increment(){
  return {
    type: types.INCREMENT
  };
}

export function decrement(){
  return {
    type: types.DECREMENT
  };
}

export function incrementAsync(){
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}
