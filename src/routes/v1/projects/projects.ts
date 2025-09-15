import { Router } from "express";
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../../../controllers/projectsController";
import authenticateUser from "../../../middleware/authenticateUser";

const projects = Router();

projects.use(authenticateUser);
projects.get("/", getAllProjects);
projects.get("/:id", getProjectById);
projects.post("/", createProject);
projects.put("/:id", updateProject);
projects.delete("/:id", deleteProject);

export default projects;
