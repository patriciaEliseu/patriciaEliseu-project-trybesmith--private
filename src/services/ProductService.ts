import { IProducts } from '../interfaces';
import * as ProductModel from '../models/ProductModel';

export async function getAll() {
  const data = await ProductModel.getAll();
  return data;
}

export async function insertProduct(product: IProducts) {
  const data = await ProductModel.insertProduct(product);
  return data;
}
