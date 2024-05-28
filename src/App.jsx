import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Todo list</h1>
      <div>
        <input type="text" placeholder="tâche..." />
        <button>Ajoute une tâche</button>
        <hr />
      </div>
    </>
  );
}

export default App;
