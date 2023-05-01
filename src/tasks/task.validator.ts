import { body, ValidationChain } from 'express-validator';
import { Priority } from '../enums/Priority';
import { Status } from '../enums/Status';

export const createValidator: ValidationChain[] = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('Task title is required')
    .trim()
    .isString()
    .withMessage('Task title must be a string'),
  body('date')
    .not()
    .isEmpty()
    .withMessage('Date is required')
    .trim()
    .isString()
    .withMessage('Date must be a valid date format'),
  body('description')
    .trim()
    .isString()
    .withMessage('Description needs to be a string'),
  body('priority')
    .trim()
    .isIn([Priority.NORMAL, Priority.HIGH, Priority.LOW])
    .withMessage('Priority must be one of: NORMAL, HIGH, LOW'),
  body('status')
    .trim()
    .isIn([Status.TODO, Status.IN_PROGRESS, Status.DONE])
    .withMessage('Status must be one of: TODO, IN_PROGRESS, DONE'),
];

export const updateValidator: ValidationChain[] = [
  body('id')
    .not()
    .isEmpty()
    .withMessage('Task id is required')
    .trim()
    .isUUID()
    .withMessage('Task id must be a valid UUID'),
  body('status')
    .trim()
    .isIn([Status.TODO, Status.IN_PROGRESS, Status.DONE])
    .withMessage('Status must be one of: TODO, IN_PROGRESS, DONE'),
]
