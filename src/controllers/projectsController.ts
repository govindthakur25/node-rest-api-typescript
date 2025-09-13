import { Request, Response } from "express";

export const getAllProjects = (req: Request, res: Response) => {
  res.status(200).json({ message: "Get all projects" });
};

export const getProjectById = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ message: `Get project ${id}` });
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
