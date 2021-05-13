import { Router } from 'express'
import RouterAgenda from './Agenda.routes.js'
import RouterClinica from './Clinica.routes.js'
import RouterConsulta from './Consulta.routes.js'
import RouterDespesa from './Despesa.routes.js'
import RouterFichaClinica from './FichaClinica.routes.js'
import RouterFormaDePagamento from './FormaDePagamento.routes.js'
import RouterLaudo from './Laudo.routes.js'
import RouterOticaParceira from './OticasParceiras.routes.js'
import RouterPaciente from './Paciente.routes.js'
import RouterPrescricaoLente from './PrescricaoLente.routes.js'
import RouterPrescricaoOculos from './PrescricaoOculos.routes.js'
import RouterProcedimento from './Procedimento.routes.js'
import RouterReceita from './Receita.routes.js'

const router = Router()

 router.use('/paciente', RouterPaciente)
 router.use('/prescricao/oculos', RouterPrescricaoOculos)
 router.use('/consulta', RouterConsulta)
 router.use('/prescricao/lente', RouterPrescricaoLente)
 router.use('/fichaClinica', RouterFichaClinica)
 router.use('/Agenda', RouterAgenda)
 router.use('/Procedimento', RouterProcedimento)
 router.use('/FormaDePagamento', RouterFormaDePagamento)
 router.use('/OticasParceiras', RouterOticaParceira)
 router.use('/Despesa', RouterDespesa)
 router.use('/Receita', RouterReceita)
 router.use('/Laudo', RouterLaudo)
 router.use('/Clinica', RouterClinica)

export default router
