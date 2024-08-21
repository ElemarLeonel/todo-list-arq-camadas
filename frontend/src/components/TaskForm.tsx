// src/components/TaskForm.tsx
import React, { useState } from "react";
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
      console.log("Task created:", response.data);
      setTask({
        title: "",
        description: "",
        is_completed: false,
      });
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label>Completed</label>
        <input
          type="checkbox"
          name="is_completed"
          checked={task.is_completed}
          onChange={(e) => setTask({ ...task, is_completed: e.target.checked })}
        />
      </div>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
