import { supabase } from "../config/supabaseClient";
import { Task } from "../models/Task";

export class TaskRepository {
  async createTask(task: Task): Promise<Task | null> {
    const { data, error } = await supabase
      .from("tasks")
      .insert(task)
      .select("*")
      .single();

    if (error) {
      console.error("Error creating task:", error);
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
      console.error("Error getting task by ID:", error);
      return null;
    }

    return data;
  }
}
