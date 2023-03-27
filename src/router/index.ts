import { Router } from 'express';
import ProductsRouter from './ProductsRouter';

const router = Router();
router.use('/products', ProductsRouter);

export = router;