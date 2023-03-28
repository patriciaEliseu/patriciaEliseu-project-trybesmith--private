import { Router } from 'express';
import ProductsRouter from './ProductsRouter';
import UsersRouter from './UsersRouter';

const router = Router();
router.use('/products', ProductsRouter);
router.use('/users', UsersRouter);

export = router;