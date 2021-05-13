import { Router } from 'express'
import ControllerReceita from '../controllers/Receita.js'

const router = Router()

router.post('/', ControllerReceita.save)
router.get('/readAll', ControllerReceita.readAll)
router.get('/read/:uuid', ControllerReceita.read)
router.delete('/:uuid', ControllerReceita.delete)
router.put('/:uuid', ControllerReceita.update)
router.get('/readDate/:dataInicial/:dataFinal', ControllerReceita.readDate)
router.get('/readDateFormaPagamento/:dataInicial/:dataFinal/:idFormaPagamento', ControllerReceita.readDatePagamento)


export default router