import { Request, Response, NextFunction } from 'express';

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
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
 
  next();
};

export default validateNameProduct;