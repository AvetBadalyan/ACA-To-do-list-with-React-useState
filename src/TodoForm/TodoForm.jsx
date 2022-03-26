import React, { useState } from "react";
import {myCustumTypes} from "../App"

export default function TodoForm({ dispatch }) {
  const [inputValue, setInputValue] = useState("");

  const ChangeHandler = (e) => {
    setInputValue(e.currentTarget.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: myCustumTypes.ADD_NEW_TASK, inputValue: inputValue });
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
