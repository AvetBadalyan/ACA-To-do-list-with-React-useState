import "./App.css";
import Header from "./Header/Header";
import React, { useState } from "react";
import TodoList from "./TodoList/TodoList";

function App() {
  let data = [
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
  ];

  const [toDoList, setToDoList] = useState(data);

  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
