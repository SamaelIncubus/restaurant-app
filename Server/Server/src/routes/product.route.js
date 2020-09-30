import { Router } from 'express';
const router = Router();

import { createProduct, getAllProduct, getProduct, deleteProduct, putProduct } from '../controllers/product.controller';

// /api/Products/
router.post('/', createProduct);
router.get('/', getAllProduct);

// /api/Products/:id
router.get('/:id', getProduct);
router.delete('/:id', deleteProduct)
router.put('/:id', putProduct)

export default router;