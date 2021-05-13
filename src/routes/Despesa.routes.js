import { Router } from 'express'
import ControllerDespesa from '../controllers/Despesa.js'

const router = Router()

router.post('/', ControllerDespesa.save)
router.get('/readAll', ControllerDespesa.readAll)
router.get('/read/:uuid', ControllerDespesa.read)
router.get('/readDate/:dataInicial/:dataFinal', ControllerDespesa.readDate)
router.get('/readDateFormaPagamento/:dataInicial/:dataFinal/:idFormaPagamento', ControllerDespesa.readDatePagamento)
router.delete('/:uuid', ControllerDespesa.delete)
router.put('/:uuid', ControllerDespesa.update)


export default router