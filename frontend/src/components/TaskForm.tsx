import React, { useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

interface Task {
  title: string;
  description: string;
  is_completed: boolean;
}

const TaskForm: React.FC = () => {
  const [task, setTask] = useState<Task>({
    title: "",
    description: "",
    is_completed: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/tasks", task);
      console.log("Tarefa criada:", response.data);
      if (response.data) {
        toast.success("Tarefa criada com sucesso", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setTask({
          title: "",
          description: "",
          is_completed: false,
        });
      }
    } catch (error) {
      toast.error("Erro ao criar a tarefa", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.error("Erro ao criar a tarefa:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center justify-center gap-2.5 px-2.5"
    >
      <div className="w-full">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Título
        </label>
        <input
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
        />
      </div>
      <div className="w-full">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Descrição
        </label>
        <textarea
          id="description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          name="description"
          value={task.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="flex items-center mb-4 gap-2">
        <input
          id="is_completed"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          type="checkbox"
          name="is_completed"
          checked={task.is_completed}
          onChange={(e) => setTask({ ...task, is_completed: e.target.checked })}
        />
        <label htmlFor="is_completed">Finalizado</label>
      </div>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        type="submit"
      >
        Criar tarefa
      </button>
    </form>
  );
};

export default TaskForm;
