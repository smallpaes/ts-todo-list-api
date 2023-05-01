import { Router } from 'express';
import { createValidator } from './task.validator';
import { taskController } from './task.controller';

const router: Router = Router();

router.get('/', taskController.getAll);

router.post('/', createValidator, taskController.postNewTask);

export default router;