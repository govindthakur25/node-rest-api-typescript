import { Request, Response } from "express";
import prisma from "../prisma-client";
import EntityNotFoundError from "../errors/EntityNotFoundError";

export const getAllTasks = async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany({
    where: {
      user_id: req.auth?.payload.sub,
    },
  });
  res.status(200).json({ tasks });
};

export const getTaskById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await prisma.task.findUnique({
    where: {
      id,
      user_id: req.auth?.payload.sub,
    },
  });
  if (!task) {
    throw new EntityNotFoundError({
      message: `Task with id ${id} not found`,
      statusCode: 404,
      code: "ERR_NF",
    });
  }
  res.status(200).json({ task });
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
