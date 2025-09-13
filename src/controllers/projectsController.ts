import { NextFunction, Request, Response } from "express";

export const getAllProjects = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    throw new Error("OOps!!");
    res.status(200).json({ message: "Get all projects" });
  } catch (error) {
    next(error);
  }
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
