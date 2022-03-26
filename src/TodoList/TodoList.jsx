import React from "react";
import { myCustumTypes } from "../App";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import "./TodoList.css";

export default function TodoList({ toDoList, dispatch }) {
  const completedTasks = toDoList.filter((task) => {
    return task.complete;
  });

  return (
    <div className="todo-box">
      <TodoForm dispatch={dispatch} />
      {toDoList.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}

      <div className="footer">
        <div className="number-completed">
          {completedTasks.length}/{toDoList.length} completed
        </div>
        <button
          style={{ margin: "10px" }}
          onClick={() => {
            dispatch({ type: myCustumTypes.FILTER_ALL_COMOPLETED });
          }}
        >
          delete the completed task
        </button>
      </div>
    </div>
  );
}
