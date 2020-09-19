import React, { useCallback, useReducer } from "react";

const initialState = {
  count1: 0,
  count2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT1":
      return { ...state, count1: state.count1 + 1 };
    case "DECREMENT1":
      return { ...state, count1: state.count1 - 1 };
    case "RESET1":
      return { ...state, count1: 0 };
    case "INCREMENT2":
      return { ...state, count2: state.count2 + action.payload };
    case "DECREMENT2":
      return { ...state, count2: state.count2 - action.payload };
    case "RESET2":
      return { ...state, count2: 0 };
    default:
      return initialState;
  }
};

export const CounterWithMultipleStates = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment1 = useCallback(() => {
    dispatch({
      type: "INCREMENT1",
    });
  }, []);

  const decrement1 = useCallback(() => {
    dispatch({
      type: "DECREMENT1",
    });
  }, []);

  const reset1 = useCallback(() => {
    dispatch({
      type: "RESET1",
    });
  }, []);

  const increment2 = useCallback(() => {
    dispatch({
      type: "INCREMENT2",
      payload: 100,
    });
  }, []);

  const decrement2 = useCallback(() => {
    dispatch({
      type: "DECREMENT2",
      payload: 100,
    });
  }, []);

  const reset2 = useCallback(() => {
    dispatch({
      type: "RESET2",
    });
  }, []);

  return (
    <div>
      <h2>Counter with Multiple States</h2>
      <button onClick={increment1}>+1</button>
      <button onClick={decrement1}>-1</button>
      <button onClick={reset1}>RESET</button>
      <p>{state.count1}</p>
      <button onClick={increment2}>+100</button>
      <button onClick={decrement2}>-100</button>
      <button onClick={reset2}>RESET</button>
      <p>{state.count2}</p>
    </div>
  );
};
