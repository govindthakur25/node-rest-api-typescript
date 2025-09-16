import { Request, Response } from "express";
import { repository } from "~/data/repositories";

export const getAllTasks = async (req: Request, res: Response) => {
  const tasks = await repository.listTasks({}, req.auth?.payload.sub);
  res.status(200).json({ tasks });
};

export const getTaskById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await repository.getTask(id, req.auth?.payload.sub);
  res.status(200).json({ task });
};

export const createTask = async (req: Request, res: Response) => {
  const task = await repository.createTask(req.body, req.auth?.payload.sub);
  res.status(201).json({ task });
};

export const updateTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedTask = repository.updateTask(
    id,
    req.body,
    req.auth?.payload.sub,
  );
  res.status(200).json({ task: updateTask });
};

export const deleteTask = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ message: `Delete task ${id}` });
};
