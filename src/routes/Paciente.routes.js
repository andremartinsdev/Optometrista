import { Router } from 'express'
import ControllerPaciente from '../controllers/Paciente'

const router = Router()

router.post('/', ControllerPaciente.save)
router.put('/:uuid', ControllerPaciente.update)
router.delete('/:uuid', ControllerPaciente.delete)
router.get('/:uuid', ControllerPaciente.findById)
router.get('/pagination/page', ControllerPaciente.pagination)
router.get('/readCpf/:cpf', ControllerPaciente.readCpf)
router.get('/readName/:nome', ControllerPaciente.readName)

export default router
