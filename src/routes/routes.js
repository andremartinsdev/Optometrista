import { Router } from 'express'
 import RouterPaciente from './Paciente.routes'
 import RouterPrescricaoOculos from './PrescricaoOculos.routes'
 import RouterPrescricaoLente from './PrescricaoLente.routes'
 import RouterConsulta from './Consulta.routes'
 import RouterFichaClinica from './FichaClinica.routes'
 import RouterAgenda from './Agenda.routes'
 import RouterProcedimento from './Procedimento.routes'
 import RouterFormaDePagamento from './FormaDePagamento.routes'
 import RouterOticaParceira from './OticasParceiras.routes'
 import RouterDespesa from './Despesa.routes'
 import RouterReceita from './Receita.routes'

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

export default router
