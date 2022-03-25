import React from "react";
import "./Todo.css";

export default function Todo({ todo, toggleHandler, taskDeleter }) {
  return (
    <div className="task" >
      <input type="checkbox" onClick={() => toggleHandler(todo.id)} />
      <div className={todo.complete ? "completed-style" : ""}>{todo.task}</div>
      <button className="delete-task" onClick={() => taskDeleter(todo.id)}>
        X
      </button>
    </div>
  );
}
