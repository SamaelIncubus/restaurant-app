import { Router } from 'express';
const router = Router();

import { createStore, getAllStore, getStore, deleteStore, putStore } from '../controllers/store.controller';

// /api/Stores/
router.post('/', createStore);
router.get('/', getAllStore);

// /api/Stores/:id
router.get('/:id', getStore);
router.delete('/:id', deleteStore)
router.put('/:id', putStore)

export default router;