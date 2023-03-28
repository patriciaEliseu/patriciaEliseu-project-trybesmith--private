import express from 'express';
import * as ProductController from '../controllers/ProductController';
import validateNameProduct from '../middleware/validateNameProd';

const router = express.Router();

router.get('/', ProductController.getAll);
router.post('/', validateNameProduct, ProductController.insertProduct);

export = router;