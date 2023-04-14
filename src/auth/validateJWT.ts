import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import 'dotenv/config';

const secret = process.env.JWT_SECRET || 'secret';

const validateJWT = async (req: Request, res: Response, next: NextFunction):
Promise<Response<string> | void> => {
  const token = req.header('Authorization');
   
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {    
    const decoded = jwt.verify(token, secret);
    // console.log('decoded', decoded);
    // criar uma chave para pegar as infor.
    res.locals.userId = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateJWT;