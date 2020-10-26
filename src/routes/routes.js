import { Router } from 'express'
import RouterPaciente from './Paciente.routes'
import RouterPrescricaoOculos from './PrescricaoOculos.routes'

const router = Router()

router.use('/paciente', RouterPaciente)
router.use('/prescricao/oculos', RouterPrescricaoOculos)

export default router
