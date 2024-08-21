import { Task } from "../models/Task";
import { TaskRepository } from "../repositories/TaskRepository";

export class TaskService {
  private taskRepository: TaskRepository;

  constructor() {
    this.taskRepository = new TaskRepository();
  }

  async createTask(task: Task): Promise<Task | null> {
    return await this.taskRepository.createTask(task);
  }

  async getTaskById(id: string): Promise<Task | null> {
    return await this.taskRepository.getTaskById(id);
  }
}
