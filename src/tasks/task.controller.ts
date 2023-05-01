import Task from './task.entity';
import { AppDataSource } from '../../app';
import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { UpdateResult } from 'typeorm';

class TaskController {
  public async getAll(req: Request, res: Response): Promise<Response> {
    let allTasks: Task[] = [];
    try {
      allTasks = await AppDataSource.getRepository(Task).find({
        order: {
          date: "ASC"
        }
      });
      allTasks = instanceToPlain(allTasks) as Task[];
      return res.status(200).json(allTasks);
    } catch(e) {
      return res.status(500).json({ error: 'Error retrieving tasks' })
    }
  }

  public async postNewTask(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let createdTask: Task;
    try {
      createdTask = await AppDataSource.getRepository(Task).save({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        status: req.body.status,
        priority: req.body.priority
      });
      createdTask = instanceToPlain(createdTask) as Task;
      return res.status(201).json(createdTask);
    } catch (e) {
      return res.status(500).json({ error: 'Error creating task' })
    }
  }

  public async patchUpdateStatus(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let foundTask: Task | null;
    try {
      foundTask = await AppDataSource
        .getRepository(Task)
        .findOneBy({id: req.body.id});
    } catch(e) {
      return res.status(500).json({ error: 'Error getting task' })
    }
    if (!foundTask) {
      return res.status(404).json({ error: 'Task not found' })
    }

    let updatedTask: UpdateResult;
    try {
      updatedTask = await AppDataSource
        .getRepository(Task)
        .update(req.body.id, { status: req.body.status }); 
      updatedTask = instanceToPlain(updatedTask) as UpdateResult;
      return res.status(200).json(updatedTask);
    } catch(e) {
      return res.status(500).json({ error: 'Error updating task' })
    }
  } 
}

export const taskController = new TaskController();