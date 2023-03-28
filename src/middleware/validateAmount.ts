import { Request, Response, NextFunction } from 'express';

import 'dotenv/config';

const validateAmountProduct = async (req: Request, res: Response, next: NextFunction):
Promise<Response<string> | void> => {
  const { amount } = req.body;
  if (!amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }
  
  if (typeof amount !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  }
  const caracter = 2;
  if (amount.length < caracter) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }
 
  next();
};

export default validateAmountProduct;