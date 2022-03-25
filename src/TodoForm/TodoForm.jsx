import React, { useState } from "react";

export default function TodoForm({addNewTask}) {
  const [inputValue, setInputValue] = useState("");

  const ChangeHandler = (e) => {
    setInputValue(e.currentTarget.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    addNewTask(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input
          value={inputValue}
          type="text"
          onChange={ChangeHandler}
          placeholder="Please write your task..."
        />
        <button type="submit">Add the task </button>
    
      </form>
    </div>
  );
}
