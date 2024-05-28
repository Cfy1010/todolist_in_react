import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const inputTask = useRef(null);

  const addTask = () => {
    setTodoList([...todoList, { task: currentTask, completed: false }]);
    inputTask.current.value = "";
    setCurrentTask("");
  };

  const deleteTask = (taskToDelete) => {
    setTodoList(
      todoList.filter((task) => {
        return task.task !== taskToDelete;
      })
    );
  };
  const completeTask = (taskToComplete) => {
    setTodoList(
      todoList.map((task) => {
        return task.task == taskToComplete
          ? { task: taskToComplete, completed: true }
          : { task: task.task, completed: task.completed ? true : false };
      })
    );
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
            return (
              <div id="task">
                <li key={key}>{val.task}</li>
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
                  <h1>Tâche complete</h1>
                ) : (
                  <h1>Tâche non complete</h1>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
