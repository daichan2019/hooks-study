import React from "react";
import { Counter } from "./components/Counter";
import { CounterWithMultipleStates } from "./components/CounterWithMultipleStates";
import { Todo } from "./components/Todo";
import { TextCount } from "./components/TextCount";

const App = () => {
  return (
    <div>
      <h1>useReducer</h1>
      <Counter />
      <CounterWithMultipleStates />
      <Todo />
      <TextCount />
    </div>
  );
};

export default App;
