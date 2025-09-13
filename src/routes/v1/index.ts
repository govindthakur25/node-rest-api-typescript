import { Router } from "express";
import projectsRouter from "./projects/projects";
import tasksRouter from "./tasks/tasks";

const v1: Router = Router();

v1.use("/projects", projectsRouter);
v1.use("/tasks", tasksRouter);

export default v1;
