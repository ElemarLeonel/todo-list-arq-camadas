import { Request, Response } from "express";
import { TaskService } from "../services/TaskService";

const taskService = new TaskService();

export const createTask = async (req: Request, res: Response) => {
  const task = req.body;

  const createdTask = await taskService.createTask(task);
  if (createdTask) {
    res.status(201).json(createdTask);
  } else {
    res.status(500).json({ error: "Falha ao criar a tarefa" });
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  const id = req.params.id;

  const task = await taskService.getTaskById(id);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({ error: "Tarefa não encontrada" });
  }
};
