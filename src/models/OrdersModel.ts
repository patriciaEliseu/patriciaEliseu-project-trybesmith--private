// import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IOrders } from '../interfaces';

export default async function getAll(): Promise<IOrders[]> {
  // const query = 'SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds '
  // + 'FROM Trybesmith.orders AS o '
  // + 'INNER JOIN Trybesmith.products AS p ON o.id = p.order_id GROUP BY o.id ';
  const query2 = `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.orders AS o
    INNER JOIN Trybesmith.products AS p ON o.id = p.order_id GROUP BY o.id `;
  const [order] = await connection.execute(query2);
  console.log('order', order);
  
  return order as IOrders[];
}