/* import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import UserService from '../services/UserService';

const secret = process.env.JWT_SECRET || 'secret';

const validateJWT = async (req: Request, res: Response, next: NextFunction):
Promise<Response<string> | void> => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {    
    const decoded = jwt.verify(token, secret);

    const user = await UserService.login(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

export default validateJWT; */