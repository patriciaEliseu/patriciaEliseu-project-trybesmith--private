import express from 'express';
import * as UserController from '../controllers/UserController';
import validateLevel from '../middleware/validateLevel';
import validatePassword from '../middleware/validatePassword';
import validateUserName from '../middleware/validateUserName';
import validateVocation from '../middleware/validateVocation';

const router = express.Router();

router.post(
  '/',
  validateUserName,
  validateVocation,
  validateLevel,
  validatePassword,

  UserController.insertUser,
);

export = router;