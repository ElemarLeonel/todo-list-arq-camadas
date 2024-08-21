import express from "express";
import { createTask, getTaskById } from "./controllers/TaskController";

const app = express();
app.use(express.json());

app.post("/tasks", createTask);
app.get("/tasks/:id", getTaskById);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
