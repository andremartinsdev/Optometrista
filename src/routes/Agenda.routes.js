import { Router } from 'express'
import ControllerAgenda from '../controllers/Agenda'

const router = Router()

router.post('/', ControllerAgenda.save)
router.get('/', ControllerAgenda.read)
router.delete('/:uuid', ControllerAgenda.delete)
router.put('/:uuid', ControllerAgenda.update)
router.get('/read/:uuid', ControllerAgenda.readParams)
router.get('/read/agenda/:uuid', ControllerAgenda.readAgendaJoinPaciente)
router.get('/readDate/:dataInicial/:dataFinal', ControllerAgenda.readDate)
router.get('/readDate/Relatorio/:dataInicial/:dataFinal', ControllerAgenda.readDateRelatorio)
router.get('/readDate/Relatorio/receita/:dataInicial/:dataFinal', ControllerAgenda.readDateRelatorioReceita)
router.get('/readDate/Relatorio/receita/:dataInicial/:dataFinal/:idFormaPagamento', ControllerAgenda.readDateRelatorioReceitaFormPag)
router.get('/readDate/Relatorio/receber/:dataInicial/:dataFinal', ControllerAgenda.readDateRelatorioReceber)
router.get('/readDate/Relatorio/receber/:dataInicial/:dataFinal/:idFormaPagamento', ControllerAgenda.readDateRelatorioReceberFormaPagamento)
router.get('/readDate/Agendamento/Finalizado/:dataInicial/:dataFinal', ControllerAgenda.readDateAgendamentoFinalizado)
router.get('/readDateInner/:data', ControllerAgenda.readDateInner)
router.get('/readDatePaciente/:dataInicial/:dataFinal/:idPaciente', ControllerAgenda.readDatePaciente)
router.get('/readDateVencimento/:dataAtual', ControllerAgenda.readDateVencimento)


export default router