import { Request, Response } from 'express';
import { IProducts } from '../interfaces';
import * as ProductService from '../services/ProductService';

export async function getAll(_req: Request, res: Response) {
  try {
    const productsAll = await ProductService.getAll();
    return res.status(200).json(productsAll);
  } catch (error) {
    res.status(500).json({ message: 'Deu errado' });
  }
}

export async function insertProduct(req: Request, res: Response) {
  try {
    const product = req.body as IProducts;

    const newProduct = await ProductService.insertProduct(product);
    return res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Deu errado' });
  }
}
