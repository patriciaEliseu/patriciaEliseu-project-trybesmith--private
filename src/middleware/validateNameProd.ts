import { Request, Response, NextFunction } from 'express';
// import * as UserService from '../services/UserService';
import 'dotenv/config';

const validateNameProduct = async (req: Request, res: Response, next: NextFunction):
Promise<Response<string> | void> => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  
  if (name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }
  const caracter = 2;
  if (name.length < caracter) {
    return res.status(422).json({ message: '"name" must be a string' });
  }
  /*  const user = await UserService.login({ username, password });
  console.log('USER', user);
   */
  /*  if (!user) {
    return res.status(401).json({ message: 'Username or password invalid' });
  } */
  next();
};

export default validateNameProduct;