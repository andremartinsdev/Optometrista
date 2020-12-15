import { Router } from 'express'
import ControllerFormaDePagamento from '../controllers/FormaDePagamento'

const router = Router();

router.post('/', ControllerFormaDePagamento.save)
router.get('/read', ControllerFormaDePagamento.read)

export default router