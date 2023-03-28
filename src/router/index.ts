import { Router } from 'express';
import ProductsRouter from './ProductsRouter';
import UsersRouter from './UsersRouter';
import OrdersRouter from './OrdersRouter';

const router = Router();
router.use('/products', ProductsRouter);
router.use('/users', UsersRouter);
router.use('/orders', OrdersRouter);

export = router;