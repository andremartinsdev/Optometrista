import { Router } from 'express'
import ControllerLaudo from '../controllers/Laudo'


const router = Router();

router.post('/', ControllerLaudo.save)
router.get('/readDate/:idPaciente/:dataInicial/:dataFinal/page', ControllerLaudo.read)


export default router