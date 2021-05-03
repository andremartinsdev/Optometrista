import { Router } from 'express'
import ControllerPaciente from '../controllers/Paciente'

const router = Router()

router.post('/', ControllerPaciente.save)
router.put('/:uuid', ControllerPaciente.update)
router.delete('/:uuid', ControllerPaciente.delete)
router.get('/:uuid', ControllerPaciente.findById)
router.get('/pagination/page', ControllerPaciente.pagination)

export default router
