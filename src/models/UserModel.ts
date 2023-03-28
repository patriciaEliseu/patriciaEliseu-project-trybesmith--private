import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUsers, Users } from '../interfaces';

export default async function insertUser(user:IUsers): Promise<Users> {
  const { username, vocation, level, password } = user;

  const query = 'INSERT INTO  Trybesmith.users(username, vocation, level, password)'
   + 'VALUES(?, ?, ?, ?)';

  const values = [username, vocation, level, password];
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newUser: Users = { id, username, vocation, level, password };
  return newUser;
}