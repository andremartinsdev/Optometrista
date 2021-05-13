import { Router } from 'express'
import ControllerPrescricaoLente from '../controllers/PrescricaoLente.js'

const router = Router()

router.post('/', ControllerPrescricaoLente.save)
router.put('/:uuid', ControllerPrescricaoLente.update)
router.delete('/:uuid', ControllerPrescricaoLente.delete)
router.get('/:uuid', ControllerPrescricaoLente.findById)
router.get('/read/:idPaciente/:dataInicial/:dataFinal', ControllerPrescricaoLente.readParams)

export default router
