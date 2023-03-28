import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { IUsers, Users, IUsers2 } from '../interfaces';

export async function insertUser(user:IUsers): Promise<Users> {
  const { username, vocation, level, password } = user;

  const query = 'INSERT INTO  Trybesmith.users(username, vocation, level, password)'
   + 'VALUES(?, ?, ?, ?)';

  const values = [username, vocation, level, password];
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newUser: Users = { id, username, vocation, level, password };
  return newUser;
}

export async function login(user: IUsers2): Promise<Users> {
  const { username, password } = user; 

  const query = `SELECT * FROM Trybesmith.users AS o
   WHERE username = ? AND password = ?`;
  
  const [[result]] = await connection
    .execute<RowDataPacket[] & Users[]>(query, [username, password]);
  console.log('resultModel', result);
  
  return result;
}