import { Router } from 'express';
const router = Router();

import { createCart, getAllCart, getCart, deleteCart, putCart } from '../controllers/cart.controller';

// /api/Carts/
router.post('/', createCart);
router.get('/', getAllCart);

// /api/Carts/:id
router.get('/:id', getCart);
router.delete('/:id', deleteCart)
router.put('/:id', putCart)

export default router;