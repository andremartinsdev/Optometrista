import { Router } from 'express'
import ControllerConsulta from '../controllers/Consulta'

const router = Router()

router.post('/', ControllerConsulta.save)
router.put('/:uuid', ControllerConsulta.update)
router.delete('/:uuid', ControllerConsulta.delete)
router.get('/:uuid', ControllerConsulta.findById)

export default router
