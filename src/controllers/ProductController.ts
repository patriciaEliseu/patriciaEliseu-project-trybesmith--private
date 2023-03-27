import { Request, Response } from 'express';
import { IProducts } from '../interfaces';
import ProductService from '../services/ProductService';

export default async function insertProduct(req: Request, res: Response) {
  try {
    const product = req.body as IProducts;

    const newProduct = await ProductService(product);
    return res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Deu errado' });
  }
}
