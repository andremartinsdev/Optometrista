import { Router } from 'express'
import ControllerPrescricaoOculos from '../controllers/PrescricaoOculos'

const router = Router()

router.post('/', ControllerPrescricaoOculos.save)
router.put('/:uuid', ControllerPrescricaoOculos.update)
router.delete('/:uuid', ControllerPrescricaoOculos.delete)
router.get('/:uuid', ControllerPrescricaoOculos.findById)

export default router
