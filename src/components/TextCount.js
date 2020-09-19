import React, { useCallback, useReducer } from "react";

export const TextCount = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INPUT":
        const error =
          action.payload.length === 0 ? 1 : action.payload.length > 15 ? 2 : 0;
        return {
          text: action.payload,
          error,
        };
      case "RESET":
        return initialState;
      default:
        return state;
    }
  };

  const initialState = {
    text: "",
    error: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = useCallback((e) => {
    dispatch({ type: "INPUT", payload: e.target.value });
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: "RESET" });
  }, []);

  return (
    <div>
      <h2>Text Count</h2>
      <input type="text" value={state.text} onChange={handleChange} />
      <input type="button" value="reset" onClick={handleReset} />
      {state.error === 1 && <p>空欄です</p>}
      {state.error === 2 && <p>15文字以上です</p>}
    </div>
  );
};
