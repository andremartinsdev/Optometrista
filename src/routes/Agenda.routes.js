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
router.get('/readDate/Agendamento/Finalizado/:dataInicial/:dataFinal', ControllerAgenda.readDateAgendamentoFinalizado)
router.get('/readDateInner/:data', ControllerAgenda.readDateInner)
router.get('/readDatePaciente/:dataInicial/:dataFinal/:idPaciente', ControllerAgenda.readDatePaciente)


export default router
