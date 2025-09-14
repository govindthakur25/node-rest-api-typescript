import { NextFunction, Request, Response } from "express";
import prisma from "../prisma-client";
import EntityNotFoundError from "../errors/EntityNotFoundError";

export const getAllProjects = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const projects = await prisma.project.findMany();
    res.status(200).json({ projects });
  } catch (error) {
    next(error);
  }
};

export const getProjectById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const project = await prisma.project.findUnique({
    where: {
      id,
    },
  });
  if (!project) {
    throw new EntityNotFoundError({
      message: `Project with id ${id} not found`,
      statusCode: 404,
      code: "ERR_NF",
    });
  }
  res.status(200).json({ project });
};

export const listProjectTasks = async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany({
    where: {
      project_id: req.params.id,
    },
  });
  res.status(201).json({ message: "Create project", data: req.body });
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
