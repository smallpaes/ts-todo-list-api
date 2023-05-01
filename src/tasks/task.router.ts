import { Router } from 'express';
import { createValidator, updateValidator } from './task.validator';
import { taskController } from './task.controller';

const router: Router = Router();

router.get('/', taskController.getAll);

router.post('/', createValidator, taskController.postNewTask);

router.patch('/', updateValidator, taskController.patchUpdate);

export default router;