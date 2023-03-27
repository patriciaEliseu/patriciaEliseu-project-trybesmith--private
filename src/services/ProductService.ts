import { IProducts } from '../interfaces';
import ProductModel from '../models/ProductModel';

export default async function insertProduct(product: IProducts) {
  const data = await ProductModel(product);
  return data;
}
