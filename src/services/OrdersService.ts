// import { IOrders } from '../interfaces';
import OrdersModel from '../models/OrdersModel';

export default async function getAll() {
  const data = await OrdersModel();
  console.log('data', data);
  
  return data;
}
