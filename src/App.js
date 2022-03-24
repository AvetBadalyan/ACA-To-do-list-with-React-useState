import "./App.css";
import Header from "./Header/Header";
import React, { useState } from "react";
import TodoList from "./TodoList/TodoList";

function App() {
  const [toDoList, setToDoList] = useState([
    {
      id: 1,
      task: "task 1",
      complete: true,
    },
    {
      id: 2,
      task: "task 2",
      complete: false,
    },
  ]);

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

  const addNewTask = (inputValue) => {
    let oldArray = [...toDoList];
    oldArray = [
      ...oldArray,
      { id: toDoList.length + 1, task: inputValue, complete: false },
    ];
    setToDoList(oldArray);
  };

  return (
    <div className="App">
      <Header />
      <TodoList
        toDoList={toDoList}
        toggleHandler={toggleHandler}
        filterHandler={filterHandler}
        addNewTask={addNewTask}
      />
    </div>
  );
}

export default App;
