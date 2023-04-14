import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IOrders } from '../interfaces';

export async function getAll(): Promise<IOrders[]> {
  // const query = 'SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds '
  // + 'FROM Trybesmith.orders AS o '
  // + 'INNER JOIN Trybesmith.products AS p ON o.id = p.order_id GROUP BY o.id ';
  const query2 = `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.orders AS o
    INNER JOIN Trybesmith.products AS p ON o.id = p.order_id GROUP BY o.id `;
  const [order] = await connection.execute(query2);
  // console.log('order', order);
  
  return order as IOrders[];
}

export async function insertOrder(order: IOrders, userId: number): Promise<IOrders> {
  const { productsIds } = order;
  // const { userId } = 
  const query = 'INSERT INTO Trybesmith.orders(user_id) VALUES(?)';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [userId]);
  
  const query2 = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';
  await Promise.all(productsIds.map(async (item) => {
    (await connection.execute(query2, [insertId, item]));
  })); 
  const newOrder: IOrders = { id: insertId, productsIds };
  return newOrder;
}
