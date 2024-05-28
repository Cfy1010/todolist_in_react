import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const addTask = () => {
    setTodoList([...todoList, currentTask]);
    console.log(todoList);
  };

  return (
    <>
      <h1>Todo list</h1>
      <div>
        <input
          type="text"
          placeholder="tâche..."
          onChange={(e) => {
            setCurrentTask(e.target.value);
          }}
        />
        <button
          onClick={() => {
            addTask();
          }}
        >
          Ajoute une tâche
        </button>
        <hr />
        <ul>{/* <li>{currentTask}</li> */}</ul>
      </div>
    </>
  );
}

export default App;
