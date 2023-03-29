import { Request, Response, NextFunction } from 'express';

import 'dotenv/config';

const validateUserName = async (req: Request, res: Response, next: NextFunction):
Promise<Response<string> | void> => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  
  if (typeof username !== 'string') {
    return res.status(422).json({ message: '"username" must be a string' });
  }
  // const caracter = 2;
  if (typeof username !== 'string' || username.length <= 2) {
    return res.status(422)
      .json({ message: '"username" length must be at least 3 characters long' });
  }
 
  next();
};

export default validateUserName;