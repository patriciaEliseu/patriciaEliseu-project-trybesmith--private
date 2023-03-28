import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { IUsers } from '../interfaces';
import UserService from '../services/UserService';
import 'dotenv/config';

const secret = process.env.JWT_SECRET || 'secret';
// const JWT_CONFIG = {
//   algorithm: 'HS256',
//   expiresIn: '7d',
// };

export default async function insertUser(req: Request, res: Response) {
  try {
    const user = req.body as IUsers;

    const newUser = await UserService(user);
    console.log('newUser', newUser);
    // const JWT_CONFIG = {
    //   algorithm: 'HS256',
    //   expiresIn: '7d',
    // };
    // const { password: _, ...userWithoutPassword } = newUser;
    const token = jwt.sign({ data: { userId: newUser.id } }, secret);
    return res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Deu errado' });
  }
}
