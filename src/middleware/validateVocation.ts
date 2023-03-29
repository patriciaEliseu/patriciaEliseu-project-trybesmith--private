import { Request, Response, NextFunction } from 'express';

import 'dotenv/config';

const validateVocation = async (req: Request, res: Response, next: NextFunction):
Promise<Response<string> | void> => {
  const { vocation } = req.body;
  if (!vocation) {
    return res.status(400).json({ message: '"vocation" is required' });
  }
  
  if (typeof vocation !== 'string') {
    return res.status(422).json({ message: '"vocation" must be a string' });
  }
  // const caracter = 2;
  if (typeof vocation !== 'string' || vocation.length <= 2) {
    return res.status(422)
      .json({ message: '"vocation" length must be at least 3 characters long' });
  }
 
  next();
};

export default validateVocation;