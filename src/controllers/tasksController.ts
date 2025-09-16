import { Request, Response } from "express";
import { repository } from "~/data/repositories";
import { getPaginationParameters } from "~/utils";

export const getAllTasks = async (req: Request, res: Response) => {
  const { page, perPage, limit, offset } = getPaginationParameters(req);
  const result = await repository.listTasks(
    {
      limit,
      offset,
    },
    req.auth?.payload.sub,
  );
  res.status(200).json({
    tasks: result.tasks,
    page,
    per_page: perPage,
    total_pages: Math.ceil(result.totalCount / perPage),
    total_count: result.totalCount,
  });
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
