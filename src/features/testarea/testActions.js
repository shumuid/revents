import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";
import { asyncActionStart, asyncActionFinish } from "../async/asyncActions";
import { ASYNC_ACTION_START } from "../async/asyncConstants";

export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER
  };
};

const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// using async allows you to get rid of the promise chains because the execution is stoped while using the await operator
export const incrementAsync = name => {
  return async dispatch => {
    dispatch({ type: ASYNC_ACTION_START, payload: name });
    await delay(1000);
    dispatch(incrementCounter());
    dispatch(asyncActionFinish());
  };
};

export const decrementAsync = name => {
  return async dispatch => {
    // dispatch(asyncActionStart()); same effect as below
    dispatch({ type: ASYNC_ACTION_START, payload: name });
    await delay(1000);
    dispatch({ type: DECREMENT_COUNTER });
    dispatch(asyncActionFinish());
  };
};
