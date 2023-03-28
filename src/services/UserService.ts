import { IUsers, IUsers2 } from '../interfaces';
import * as UserModel from '../models/UserModel';

export async function insertUser(user: IUsers) {
  const data = await UserModel.insertUser(user);
  console.log('DATA', data);
  
  return data;
}

export async function login(user: IUsers2) {
  const data = await UserModel.login(user);
  console.log('data', data);
  
  return data;
}