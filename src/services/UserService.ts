import { IUsers } from '../interfaces';
import UserModel from '../models/UserModel';

export default async function insertUser(user: IUsers) {
  const data = await UserModel(user);
  return data;
}
