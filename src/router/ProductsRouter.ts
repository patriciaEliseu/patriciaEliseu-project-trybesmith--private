import express from 'express';
import * as ProductController from '../controllers/ProductController';
import validateAmountProduct from '../middleware/validateAmount';
import validateNameProduct from '../middleware/validateNameProd';

const router = express.Router();

router.get('/', ProductController.getAll);
router.post('/', validateNameProduct, validateAmountProduct, ProductController.insertProduct);

export = router;