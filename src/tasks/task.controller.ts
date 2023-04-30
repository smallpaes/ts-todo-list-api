import Task from './task.entity';
import { AppDataSource } from '../../app';
import { instanceToPlain } from 'class-transformer';

export class TaskController {
  constructor(private taskRepository = AppDataSource.getRepository(Task)) {}

  public async getAll(): Promise<Task[] | undefined> {
    let allTasks: Task[] = [];
    try {
      allTasks = await this.taskRepository.find({
        order: {
          date: "ASC"
        }
      });
      allTasks = instanceToPlain(allTasks) as Task[];
      return allTasks;
    } catch(e) {
      console.error(e);
    }
    return allTasks;
  }
}