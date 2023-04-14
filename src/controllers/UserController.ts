import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { IUsers, IUsers2 } from '../interfaces';
import * as UserService from '../services/UserService';
import 'dotenv/config';

const secret = process.env.JWT_SECRET || 'secret';

export async function insertUser(req: Request, res: Response) {
  try {
    const user = req.body as IUsers;

    const newUser = await UserService.insertUser(user);
    console.log('newUser', newUser);
 
    const token = jwt.sign({ data: { userId: newUser.id } }, secret);
    return res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Deu errado' });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const user = req.body as IUsers2;
    
    const loginUser = await UserService.login(user);
    const token = jwt.sign({ data: { userId: loginUser.id } }, secret);
    return res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Deu errado' });
  }
}