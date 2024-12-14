import { Router } from 'express';

import userRoutes from './userRoutes';
import albumRoutes from './albumRoutes';
import photoRoutes from './photoRoutes';

const router = Router();

router.use('/users', userRoutes);
router.use(albumRoutes);
router.use(photoRoutes);

export default router;