import { Router } from 'express';
import ControllerProcedimento from '../controllers/Procedimento.js';

const router = Router();

router.post('/', ControllerProcedimento.save)
router.put('/:uuid', ControllerProcedimento.update)
router.delete('/:uuid', ControllerProcedimento.delete)
router.get('/readAll', ControllerProcedimento.readAll) 
router.get('/read/:uuid', ControllerProcedimento.read) 

export default router