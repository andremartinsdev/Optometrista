import { Router } from 'express'
import RouterPaciente from './Paciente.routes'

const router = Router()

router.use('/paciente', RouterPaciente)

export default router
