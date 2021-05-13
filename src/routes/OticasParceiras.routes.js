import { Router } from 'express';
import ControllerOticaParceira from '../controllers/OticaParceira.js';

const router = Router();

router.post('/', ControllerOticaParceira.save)
router.get('/read', ControllerOticaParceira.read)
router.delete('/:uuid', ControllerOticaParceira.delete)
router.get('/:uuid', ControllerOticaParceira.findById)
router.put('/:uuid', ControllerOticaParceira.update)

export default router