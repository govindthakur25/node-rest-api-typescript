import { Router } from "express";
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "~/controllers/tasksController";
import authenticateUser from "~/middleware/authenticateUser";
const tasks: Router = Router();

tasks.use(authenticateUser);
tasks.get("/", getAllTasks);
tasks.get("/:id", getTaskById);
tasks.post("/", createTask);
tasks.put("/:id", updateTask);
tasks.delete("/:id", deleteTask);

export default tasks;
