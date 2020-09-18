import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

export const Counter = () => {
  const initialState = {
    count: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const decrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const reset = () => {
    dispatch({
      type: "RESET",
    });
  };

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>RESET</button>
      <p>{state.count}</p>
    </div>
  );
};
