import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProducts, Products } from '../interfaces';

export default async function insertProduct(product:IProducts): Promise<Products> {
  const { name, amount } = product;

  const query = 'INSERT INTO  Trybesmith.products(name, amount) VALUES(?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const { insertId: id } = result;

  const newProduct: Products = { id, name, amount };
  return newProduct;
}