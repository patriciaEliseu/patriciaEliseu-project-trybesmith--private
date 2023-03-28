import { Request, Response } from 'express';
// import { IOrders } from '../interfaces';
import OrdersService from '../services/OrdersService';

export default async function getAll(_req: Request, res: Response) {
  try {
    const newOrder = await OrdersService();
    console.log('new', OrdersService);
    return res.status(200).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: 'Deu errado' });
  }
}
