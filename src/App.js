import "./App.css";
import Header from "./Header/Header";
import React, { useReducer } from "react";
import TodoList from "./TodoList/TodoList";

const initialState = {
  toDoList: [],
};

export const myCustumTypes = {
  COMPLETE_TOGGLER: "COMPLETE_TOGGLER",
  FILTER_ALL_COMOPLETED: "FILTER_ALL_COMOPLETED",
  ADD_NEW_TASK: "ADD_NEW_TASK",
  DELETE_ONE_TASK: "DELETE_ONE_TASK",
};

function reducer(state, action) {
  switch (action.type) {
    case myCustumTypes.COMPLETE_TOGGLER:
      let mapped = state.toDoList.map((task) => {
        return task.id === action.id
          ? { ...task, complete: !task.complete }
          : { ...task };
      });
      return { ...state, toDoList: mapped };

    case myCustumTypes.FILTER_ALL_COMOPLETED:
      let filtered = state.toDoList.filter((task) => {
        return !task.complete;
      });
      return { ...state, toDoList: filtered };

    case myCustumTypes.ADD_NEW_TASK:
      let newToDoList = [
        ...state.toDoList,
        {
          id: Math.random().toFixed(3),
          task: action.inputValue,
          complete: false,
        },
      ];
      return { ...state, toDoList: newToDoList };

    case myCustumTypes.DELETE_ONE_TASK:
      let afterDeletingOneItem = state.toDoList.filter(
        (task) => task.id !== action.id
      );
      return { ...state, toDoList: afterDeletingOneItem };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Header />
      <TodoList toDoList={state.toDoList} dispatch={dispatch} />
    </div>
  );
}

export default App;
