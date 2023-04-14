import express from 'express';
import validateJWT from '../auth/validateJWT';
import * as OrdersController from '../controllers/OrdersController';

const router = express.Router();

router.get('/', OrdersController.getAll);
router.post('/', validateJWT, OrdersController.insertOrder);
export = router;