import express from "express";
import cors from "cors";
import { createTask, getTaskById } from "./controllers/TaskController";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.post("/tasks", createTask);
app.get("/tasks/:id", getTaskById);

const PORT = process.env.PORT || 50000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
