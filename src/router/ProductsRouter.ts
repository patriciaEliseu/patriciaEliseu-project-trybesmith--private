import express from 'express';
import * as ProductController from '../controllers/ProductController';

const router = express.Router();

router.get('/', ProductController.getAll);
router.post('/', ProductController.insertProduct);

export = router;