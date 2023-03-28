import { Request, Response, NextFunction } from 'express';
import * as UserService from '../services/UserService';
import 'dotenv/config';

const validateLogin = async (req: Request, res: Response, next: NextFunction):
Promise<Response<string> | void> => {
  const { username, password } = req.body;
  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  const user = await UserService.login({ username, password });
  console.log('USER', user);
  
  if (!user) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  next();
};

export default validateLogin;