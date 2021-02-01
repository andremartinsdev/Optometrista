import { Router } from 'express'
import ControllerLogin from '../controllers/Login'

const router = Router();

router.get('/', ControllerLogin.login)
router.post('/Logar', ControllerLogin.logar)

export default router;

