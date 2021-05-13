import { Router } from 'express';
import ControllerFormaDePagamento from '../controllers/FormaDePagamento.js';

const router = Router();

router.post('/', ControllerFormaDePagamento.save)
router.delete('/:uuid', ControllerFormaDePagamento.delete)
router.get('/read', ControllerFormaDePagamento.read)
router.put('/:uuid', ControllerFormaDePagamento.update)
router.get('/:uuid', ControllerFormaDePagamento.findById)

export default router