import { Router } from 'express';
const router = Router();

import { createDeliver, getAllDeliver, getDeliver, deleteDeliver, putDeliver } from '../controllers/deliver.controller';

// /api/Delivers/
router.post('/', createDeliver);
router.get('/', getAllDeliver);

// /api/Delivers/:id
router.get('/:id', getDeliver);
router.delete('/:id', deleteDeliver)
router.put('/:id', putDeliver)

export default router;