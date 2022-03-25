import React from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import "./TodoList.css"

export default function TodoList({
  toDoList,
  toggleHandler,
  filterHandler,
  addNewTask,
  taskDeleter,
}) {
  return (
    <div className="todo-box">
      <TodoForm addNewTask={addNewTask} />
      {toDoList.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            toggleHandler={toggleHandler}
            filterHandler={filterHandler}
            taskDeleter={taskDeleter}
          />
        );
      })}
      <button style={{ margin: "10px" }} onClick={filterHandler}>
        delete the completed task
      </button>
    </div>
  );
}
