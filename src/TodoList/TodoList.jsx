import React from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";

export default function TodoList({ toDoList, toggleHandler, filterHandler, addNewTask }) {
  return (
    <div>
      <TodoForm addNewTask={addNewTask} />
      {toDoList.map((todo) => {
        return (
          <Todo
            todo={todo}
            toggleHandler={toggleHandler}
            filterHandler={filterHandler}
          />
        );
      })}
      <button style={{ margin: "10px" }} onclick={filterHandler}>
        delete the completed task
      </button>
    </div>
  );
}
