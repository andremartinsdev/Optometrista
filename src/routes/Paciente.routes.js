import { Router } from 'express'
import ControllerPaciente from '../controllers/Paciente'

const router = Router()

router.post('/', ControllerPaciente.save)
router.put('/:uuid', ControllerPaciente.update)

export default router
