import React, { useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

interface Task {
  id: string;
  title: string;
  description: string;
  is_completed: boolean;
}

const TaskDisplay: React.FC = () => {
  const [taskId, setTaskId] = useState<string>("");
  const [task, setTask] = useState<Task | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskId(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await api.get(`/tasks/${taskId}`);

      if (response.data) {
        toast.success("Tarefa encontrada com sucesso", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTask(response.data);
      }
    } catch (error) {
      toast.error("Erro ao procurar a tarefa", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.error("Erro ao procurar a tarefa:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2.5">
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        type="text"
        placeholder="Pesquise pelo ID da tarefa"
        value={taskId}
        onChange={handleChange}
      />
      <button
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
        onClick={handleSearch}
      >
        Pesquisar Tarefa
      </button>

      {task && (
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Título
                </th>
                <th scope="col" className="px-6 py-3">
                  Descrição
                </th>
                <th scope="col" className="px-6 py-3">
                  Finalizado
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {task.title}
                </th>
                <td className="px-6 py-4">{task.description}</td>
                <td className="px-6 py-4">
                  {task.is_completed ? "Finalizada" : "Não Finalizada"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TaskDisplay;
