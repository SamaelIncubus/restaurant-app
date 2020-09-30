import { Router } from 'express';
const router = Router();

import { createClient, getAllClient, getClient, deleteClient, putClient } from '../controllers/client.controller';

// /api/Clients/
router.post('/', createClient);
router.get('/', getAllClient);

// /api/Clients/:id
router.get('/:id', getClient);
router.delete('/:id', deleteClient)
router.put('/:id', putClient)

export default router;