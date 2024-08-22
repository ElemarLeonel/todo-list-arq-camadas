import { supabase } from "../config/supabaseClient";
import { Task } from "../entities/Task";

export class TaskRepository {
  async createTask(task: Task): Promise<Task | null> {
    const { data, error } = await supabase
      .from("tasks")
      .insert(task)
      .select("*")
      .single();

    if (error) {
      console.error("Erro ao criar a tarefa:", error);
      return null;
    }

    return data;
  }

  async getTaskById(id: string): Promise<Task | null> {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Erro ao pegar a tarefa pelo ID:", error);
      return null;
    }

    return data;
  }
}
