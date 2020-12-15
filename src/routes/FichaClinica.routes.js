import { Router } from 'express'
import ControllerFichaClinica from '../controllers/FichaClinica'

const router = Router()

router.post('/', ControllerFichaClinica.save)
router.put('/:uuid', ControllerFichaClinica.update)
router.delete('/:uuid', ControllerFichaClinica.delete)
router.get('/:uuid', ControllerFichaClinica.findById)
router.get('/read/:idPaciente/:dataInicial/:dataFinal', ControllerFichaClinica.read)


export default router
