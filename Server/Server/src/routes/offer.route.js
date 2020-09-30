import { Router } from 'express';
const router = Router();

import { createOffer, getAllOffer, getOffer, deleteOffer, putOffer } from '../controllers/offer.controller';

// /api/Offer/
router.post('/', createOffer);
router.get('/', getAllOffer);

// /api/Offer/:id
router.get('/:id', getOffer);
router.delete('/:id', deleteOffer)
router.put('/:id', putOffer)

export default router;