import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const inputRef = useRef(null);

  const addTask = () => {
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      { task: currentTask, completed: false },
    ]);
    inputRef.current.value = "";
    setCurrentTask("");
  };

  const deleteTask = (taskToDelete) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((task) => task.task !== taskToDelete)
    );
  };
  const completeTask = (taskToComplete) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((task) =>
        task.task == taskToComplete
          ? { ...task, completed: true }
          : { ...task, completed: task.completed }
      )
    );
  };

  return (
    <>
      <h1>Todo list</h1>
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="tâche..."
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
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
          {todoList.map((val) => (
            <div key={val.task} id="task">
              <li>{val.task}</li>
              <button
                onClick={() => {
                  completeTask(val.task);
                }}
              >
                Fait
              </button>
              <button
                onClick={() => {
                  deleteTask(val.task);
                }}
              >
                Supprimer
              </button>
              {val.completed ? (
                <h3>Tâche complete</h3>
              ) : (
                <h3>Tâche non complete</h3>
              )}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
