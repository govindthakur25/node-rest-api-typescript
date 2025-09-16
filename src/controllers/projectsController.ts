import { NextFunction, Request, Response } from "express";
import { repository } from "~/data/repositories";

export const getAllProjects = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const projects = await repository.listProjects({}, req.auth?.payload.sub);
    res.status(200).json({ projects });
  } catch (error) {
    next(error);
  }
};

export const getProjectById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const project = await repository.getProject(id, req.auth?.payload.sub);
  res.status(200).json({ project });
};

export const listProjectTasks = async (req: Request, res: Response) => {
  const tasks = await repository.listTasks(
    { projectId: req.params.id },
    req.auth?.payload.sub,
  );
  res.status(201).json({ tasks });
};
export const createProject = (req: Request, res: Response) => {
  res.status(201).json({ message: "Create project", data: req.body });
};

export const updateProject = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ message: `Update project ${id}`, data: req.body });
};

export const deleteProject = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ message: `Delete project ${id}` });
};
