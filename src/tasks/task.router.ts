import { Router, Request, Response } from 'express';
import { TaskController } from './task.controller';
const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
  const taskController = new TaskController();
  const allTasks = await taskController.getAll();
  return res.status(200).json(allTasks);
});

export default router;