import React, { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import "./TodoList.css";

export default function TodoList({
  toDoList,
  toggleHandler,
  filterHandler,
  addNewTask,
  taskDeleter,
}) {
  const [isCompleted, setIsCompleted] = useState(0);
  useEffect(() => {
    setIsCompleted(toDoList.filter((task) => task.complete));
  }, [toDoList]);

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

      <div className="footer">
        <div className="number-completed">
          {isCompleted.length}/{toDoList.length} completed
        </div>
        <button style={{ margin: "10px" }} onClick={filterHandler}>
          delete the completed task
        </button>
      </div>
    </div>
  );
}
