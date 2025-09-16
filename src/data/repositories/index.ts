import BaseRepository from "./BaseRepository";
import { AddProjectRepository } from "./AddProjectRepository";
import { AddTaskRepository } from "./AddTaskRepository";

export const repository = new (AddProjectRepository(
  AddTaskRepository(BaseRepository),
))();
