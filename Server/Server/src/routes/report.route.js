import { Router } from 'express';
const router = Router();

import { reportStore } from '../controllers/report.controller';
import { reportFood } from '../controllers/report.controller';
import { reportAllergens } from '../controllers/report.controller';
import { reportClient } from '../controllers/report.controller';
import { reportDeliver } from '../controllers/report.controller';

// /api/Report/
router.get('/1', reportStore);
router.get('/2', reportFood);
router.get('/3', reportAllergens);
router.get('/4', reportClient);
router.get('/5', reportDeliver);

export default router;