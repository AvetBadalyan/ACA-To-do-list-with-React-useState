import React from "react";
import Todo from "../Todo/Todo";

export default function TodoList({ toDoList }) {
  return (
    <div>
      {toDoList.map((todo) => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
}
