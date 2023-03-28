import express from 'express';
import * as UserController from '../controllers/UserController';
import validateLogin from '../middleware/validateLogin';

const router = express.Router();

router.post('/', validateLogin, UserController.login);

export = router;