import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const inputTask = useRef(null);

  const addTask = () => {
    setTodoList([...todoList, currentTask]);
    inputTask.current.value = "";
    setCurrentTask("");
  };

  return (
    <>
      <h1>Todo list</h1>
      <div>
        <input
          ref={inputTask}
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
        <ul>
          {todoList.map((val, key) => {
            return <li key={key}>{val}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
