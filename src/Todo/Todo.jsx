import React from "react";
import "./Todo.css"

export default function Todo({ todo }) {
  return (
    <div className="task">
      <input type="checkbox" />
      <div className={todo.complete ? "completed-style" : ""}>{todo.task}</div>
      <button className="checkbox">V</button>
      <button className="delete-task">X</button>
    </div>
  );
}
