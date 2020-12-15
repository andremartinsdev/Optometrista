import ModelAgenda from '../models/ModelAgenda'
import Validation from '../services/Validation'


class ControllerAgenda {
  async save(req, res) {
    const { data } = req.body
    console.log(data)
    if(Validation.ValidaAgendamento(data)){
      res.status(400).json({
        message: 'Ocorreu um erro de Validação'
      })
    }else{
      const uuid = await ModelAgenda.save({ ...data, idEmpresa: req.idEmpresa })
      return res.status(201).json({
        message: 'Agendamento registrado com sucesso.',
        result: uuid
      })
   
    }
      
  }

  async read(req, res) {
    const idEmpresa = req.idEmpresa
    const result = await ModelAgenda.read(idEmpresa)
    return res.status(201).json({
      message: 'agenda pesquisada.',
      consulta: result
    })
  }

  async readParams(req, res) {
    const idEmpresa = req.idEmpresa
    const uuid = String(req.params.uuid)
    const result = await ModelAgenda.findById(uuid, idEmpresa)
    return res.status(201).json({
      message: 'agenda pesquisada.',
      agendamento: result
    })
  }

  async readAgendaJoinPaciente(req, res) {
    const idEmpresa = req.idEmpresa
    const uuid = String(req.params.uuid)
    const result = await ModelAgenda.readAgendaJoinPaciente(uuid, idEmpresa)
    return res.status(201).json({
      message: 'agenda pesquisada.',
      agendamento: result
    })
  }

  async delete(req, res) {
    const uuid = req.params.uuid
    const idEmpresa = req.idEmpresa
    const result = await ModelAgenda.delete(uuid, idEmpresa)
    return res.status(201).json({
      message: 'agendamento excluido',
      agendamento: result
    })
  }

  async update(req, res) {
    const { data } = req.body
    const uuid = String(req.params.uuid)
    const idEmpresa = req.idEmpresa
    await ModelAgenda.update(data, uuid, idEmpresa)

    return res.status(201).json({
      message: 'Agendamento atualizada com sucesso.'
    })
  }

  async readDate(req, res) {
    const idEmpresa = req.idEmpresa
    const dataInicial = req.params.dataInicial
    const dataFinal = req.params.dataFinal
    const result = await ModelAgenda.readDate(dataInicial, dataFinal, idEmpresa)
    return res.status(201).json({
      message: 'agendamentos pesquisados.',
      agendamentos: result
    })
  }

  async readDateRelatorio(req, res) {
    const idEmpresa = req.idEmpresa
    const dataInicial = req.params.dataInicial
    const dataFinal = req.params.dataFinal
    const result = await ModelAgenda.readDateRelatorio(dataInicial, dataFinal, idEmpresa)
    return res.status(201).json({
      message: 'agendamentos pesquisados.',
      agendamentos: result
    })
  }

  async readDateAgendamentoFinalizado(req, res) {
    const idEmpresa = req.idEmpresa
    const dataInicial = req.params.dataInicial
    const dataFinal = req.params.dataFinal
    const result = await ModelAgenda.readDateAgendamentoFinalizado(dataInicial, dataFinal, idEmpresa)
    return res.status(201).json({
      message: 'agendamentos pesquisados.',
      agendamentos: result
    })
  }

  async readDateInner(req, res) {
    const idEmpresa = req.idEmpresa
    const data = req.params.data
    const result = await ModelAgenda.readDateInner(data, idEmpresa)
    return res.status(201).json({
      message: 'agendamentos pesquisados.',
      agendamentos: result
    })
  }

  async readDatePaciente(req, res) {
    const idEmpresa = req.idEmpresa
    const dataInicial = req.params.dataInicial
    const dataFinal = req.params.dataFinal
    const idPaciente = req.params.idPaciente
    const result = await ModelAgenda.readDatePaciente(dataInicial, dataFinal, idEmpresa, idPaciente)
    return res.status(201).json({
      message: 'agendamentos pesquisados.',
      agendamentos: result
    })
  }
}

export default new ControllerAgenda();