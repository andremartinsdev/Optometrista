import { Router } from 'express'
import ControllerOticaParceira from '../controllers/OticaParceira'

const router = Router();

router.post('/', ControllerOticaParceira.save)
router.get('/read', ControllerOticaParceira.read)

export default router