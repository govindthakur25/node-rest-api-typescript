import { Router } from "express";
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../../../controllers/tasksController";

const tasks: Router = Router();

tasks.get("/", getAllTasks);
tasks.get("/:id", getTaskById);
tasks.post("/", createTask);
tasks.put("/:id", updateTask);
tasks.delete("/:id", deleteTask);

export default tasks;
