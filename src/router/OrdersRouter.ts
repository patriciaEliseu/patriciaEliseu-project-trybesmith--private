import express from 'express';
import OrdersController from '../controllers/OrdersController';

const router = express.Router();

router.get('/', OrdersController);

export = router;