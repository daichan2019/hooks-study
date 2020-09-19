import React from "react";
import { Counter } from "./components/Counter";
import { Todo } from "./components/Todo";
import { TextCount } from "./components/TextCount";

const App = () => {
  return (
    <div>
      <h1>hooks study!!!</h1>
      <Counter />
      <Todo />
      <TextCount />
    </div>
  );
};

export default App;
