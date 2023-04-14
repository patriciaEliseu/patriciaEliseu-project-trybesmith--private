// import { IOrders } from '../interfaces';
import { IOrders } from '../interfaces';
import * as OrdersModel from '../models/OrdersModel';

export async function getAll() {
  const data = await OrdersModel.getAll();
  console.log('data', data);
  
  return data;
}

export async function insertOrder(order: IOrders, userId: number) {
  const data = await OrdersModel.insertOrder(order, userId);
  console.log('DATASER', data);
  
  return data;
}