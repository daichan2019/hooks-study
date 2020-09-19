import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const task = { title: action.title, isComplete: false };
      return [...state, task];
    case "DELETE_TASK":
      return state.filter((x) => x !== action.todo);
    default:
      return state;
  }
};

export const Todo = () => {
  const initialState = [];
  const [title, setTitle] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  const addTask = () => {
    dispatch({
      type: "ADD_TASK",
      title,
    });
    setTitle("");
  };

  const deleteTask = (todo) => {
    dispatch({
      type: "DELETE_TASK",
      todo,
    });
  };

  return (
    <div>
      <h2>Todo</h2>
      <input type="text" value={title} onChange={handleInput} />
      <button onClick={addTask}>ADD</button>
      <ul>
        {state.map((todo, index) => {
          return (
            <li key={index}>
              <p>{todo.title}</p>
              <button onClick={() => deleteTask(todo)}>DONE!!</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
