// src/App.tsx
import React from "react";
import TaskForm from "./components/TaskForm";
import TaskDisplay from "./components/TaskDisplay";

const App: React.FC = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <hr />
      <TaskDisplay />
    </div>
  );
};

export default App;
