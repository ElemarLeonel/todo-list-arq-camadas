import React, { useState } from "react";
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
      setTask(response.data);
    } catch (error) {
      console.error("Error fetching task:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Task ID"
        value={taskId}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search Task</button>

      {task && (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.is_completed ? "Completed" : "Not Completed"}</p>
        </div>
      )}
    </div>
  );
};

export default TaskDisplay;
