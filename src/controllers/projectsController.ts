import { NextFunction, Request, Response } from "express";
import { repository } from "~/data/repositories";
import { getPaginationParameters } from "~/utils";

export const getAllProjects = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { limit, offset, page, perPage } = getPaginationParameters(req);
    const result = await repository.listProjects(
      {
        limit,
        offset,
      },
      req.auth?.payload.sub,
    );
    res.status(200).json({
      projects: result.projects,
      page,
      per_page: perPage,
      total_pages: Math.ceil(result.totalCount / perPage),
      total_count: result.totalCount,
    });
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
  const { limit, offset, page, perPage } = getPaginationParameters(req);
  const result = await repository.listTasks(
    { limit, offset, projectId: req.params.id },
    req.auth?.payload.sub,
  );
  res.status(201).json({
    tasks: result.tasks,
    page,
    per_page: perPage,
    total_count: result.totalCount,
    total_pages: Math.ceil(result.totalCount / perPage),
  });
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
