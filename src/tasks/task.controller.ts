import Task from './task.entity';
import { AppDataSource } from '../../app';
import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

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
    
    const newTask = new Task();
    newTask.title = req.body.title;
    newTask.description = req.body.description;
    newTask.date = req.body.date;
    newTask.status = req.body.status;
    newTask.description = req.body.description;

    let createdTask: Task;
    try {
      createdTask = await AppDataSource.getRepository(Task).save(newTask);
      createdTask = instanceToPlain(createdTask) as Task;
      return res.status(201).json(createdTask);
    } catch (e) {
      return res.status(500).json({ error: 'Error creating task' })
    }
  }
}

export const taskController = new TaskController();