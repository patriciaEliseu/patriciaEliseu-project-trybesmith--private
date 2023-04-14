import { Request, Response } from 'express';
import { IOrders } from '../interfaces';

import * as OrdersService from '../services/OrdersService';

export async function getAll(_req: Request, res: Response) {
  try {
    const Orders = await OrdersService.getAll();
    console.log('new', OrdersService);
    return res.status(200).json(Orders);
  } catch (error) {
    res.status(500).json({ message: 'Deu errado' });
  }
}

export async function insertOrder(req: Request, res: Response) {
  try {
    const order = req.body as IOrders;
    const { userId } = res.locals;
    if (order.productsIds === undefined) {
      return res.status(400).json({ message: '"productsIds" is required' });
    }
    const prodIds = order.productsIds;
    if (prodIds.length === 0) {
      return res.status(422).json({ message: '"productsIds" must include only numbers' }); 
    } 
    if (!Array.isArray(prodIds)) {
      return res.status(422).json({ message: '"productsIds" must be an array' });
    }
   
    const newOrder = await OrdersService.insertOrder(order, userId.data.userId);
    return res.status(201).json({ ...newOrder, userId: userId.data.userId });
  } catch (e) {
    res.status(500).json({ message: 'Deu errado' });
  }
}
