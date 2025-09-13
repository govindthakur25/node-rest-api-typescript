import { Request, Response } from "express";

export const getAllTasks = (req: Request, res: Response) => {
  res.status(200).json({ message: "Get all tasks" });
};

export const getTaskById = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ message: `Get task ${id}` });
};

export const createTask = (req: Request, res: Response) => {
  res.status(201).json({ message: "Create task", data: req.body });
};

export const updateTask = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ message: `Update task ${id}`, data: req.body });
};

export const deleteTask = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ message: `Delete task ${id}` });
};
