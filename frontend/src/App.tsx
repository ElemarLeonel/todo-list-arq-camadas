import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskForm from "./components/TaskForm";
import TaskDisplay from "./components/TaskDisplay";

const App: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-2.5">
      <h1 className="text-5xl font-extrabold text-gray-900 text-center">
        Gerenciador de Tarefas
      </h1>
      <TaskForm />
      <hr />
      <TaskDisplay />
      <ToastContainer />
    </div>
  );
};

export default App;
