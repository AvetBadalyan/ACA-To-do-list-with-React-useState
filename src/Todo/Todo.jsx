import React from "react";
import { myCustumTypes } from "../App";
import "./Todo.css";

export default function Todo({ todo, dispatch }) {
  return (
    <div className="task">
      <input
        type="checkbox"
        onClick={() => {
          dispatch({
            type: myCustumTypes.COMPLETE_TOGGLER,
            id: todo.id,
          });
        }}
      />
      <div className={todo.complete ? "completed-style" : ""}>{todo.task}</div>
      <button
        className="delete-task"
        onClick={() => {
          dispatch({
            type: myCustumTypes.DELETE_ONE_TASK,
            id: todo.id,
          });
        }}
      >
        X
      </button>
    </div>
  );
}
