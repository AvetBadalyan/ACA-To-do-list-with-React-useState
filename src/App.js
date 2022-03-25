import "./App.css";
import Header from "./Header/Header";
import React, { useState } from "react";
import TodoList from "./TodoList/TodoList";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const toggleHandler = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const filterHandler = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const taskDeleter = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id));
  };

  const addNewTask = (inputValue) => {
    setToDoList([
      ...toDoList,
      { id: Math.random().toFixed(3), task: inputValue, complete: false },
    ]);
  };

  return (
    <div className="App">
      <Header />
      <TodoList
        toDoList={toDoList}
        toggleHandler={toggleHandler}
        filterHandler={filterHandler}
        addNewTask={addNewTask}
        taskDeleter={taskDeleter}
      />
    </div>
  );
}

export default App;
