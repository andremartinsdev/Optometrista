import ModelAgenda from '../models/ModelAgenda'
import Validation from '../Validation/ValidaAgenda'
import AgendaEntity from '../entities/Agenda'
import ModelCliente from '../models/ModelPaciente'
import ModelFormaP from '../models/ModelFormaDePagamento'
import ModelOptParceira from '../models/ModelOticasParceiras'

class ControllerAgenda {
  async save(req, res) {
    try {
      const idEmpresa = String(req.idEmpresa)
      const agenda = new AgendaEntity({ ...req.body, idEmpresa });
      const validate = Validation.ValidaAgendamento(agenda)

      if (validate) {
        return res.status(422).json({
          message: 'Ocorreu um erro de Validação'
        })
      }

      const [paciente, formaPgmento, OptParceira] = await Promise.all([
        ModelCliente.findById(agenda.idPaciente, idEmpresa, ['uuid', 'idPaciente']),
        // ModelFormaP.findById(agenda.idFormaPagamento, idEmpresa, ['uuid', 'idFormaPagamento']),
        // ModelOptParceira.findById(agenda.idOticaParceira, idEmpresa, ['uuid', 'idOticaParceira'])
      ])

      agenda.idPaciente = paciente.idPaciente
      // agenda.idFormaPagamento = formaPgmento.idFormaPagamento
      // agenda.idOticaParceira = OptParceira.idOticaParceira

      await ModelAgenda.save(agenda)
      return res.status(201).json({ uuid: agenda.uuid })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: 'Erro ao Registrar Agendamento',
      })
    }
  }

  async update(req, res) {
    try {
      const uuid = String(req.params.uuid)
      const idEmpresa = String(req.idEmpresa)
      const agenda = new AgendaEntity({ ...req.body, uuid }, uuid);

      if (!agenda.idFormaPagamento) {
        return res.status(422).json({
          message: 'Ocorreu um erro de Validação'
        })
      }

      const agendamento = await ModelAgenda.findById(agenda.uuid, idEmpresa)

      const [formaPgmento, OptParceira] = await Promise.all([
        ModelFormaP.findById(idEmpresa, agenda.idFormaPagamento, ['uuid', 'idFormaPagamento']),
        ModelOptParceira.findById(idEmpresa, agenda.idOticaParceira, ['uuid', 'idOticaParceira'])
      ])

      agenda.idFormaPagamento = formaPgmento[0].idFormaPagamento
      agenda.idOticaParceira = OptParceira[0].idOticaParceira

      await ModelAgenda.update({ ...agendamento, ...agenda }, idEmpresa)
      return res.status(204).json({})
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: 'Erro ao Atualizar Agendamento'
      })
    }
  }

  async delete(req, res) {
    try {
      const uuid = String(req.params.uuid)
      const idEmpresa = String(req.idEmpresa)
      await ModelAgenda.delete(uuid, idEmpresa)
      return res.status(204).json({})
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao excluir Agendamento',
      })
    }
  }

  async paginationAllAgenda(req, res) {
    try {
      const dataInicial = req.params.dataInicial
      const dataFinal = req.params.dataFinal
      const { page = 1, limit = 5 } = req.query;
      const result = await ModelAgenda.paginationAllAgenda(req.idEmpresa, page, limit, dataInicial, dataFinal)
      return res.status(201).json({
        result
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro na paginação',
      })
    }
  }

  async read(req, res) {
    try {
      const idEmpresa = req.idEmpresa
      const result = await ModelAgenda.read(idEmpresa)
      return res.status(201).json({
        message: 'agenda pesquisada.',
        consulta: result
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao pesquisar Agendamento',
      })
    }
  }

  async readParams(req, res) {
    try {
      const idEmpresa = req.idEmpresa
      const uuid = String(req.params.uuid)
      const result = await ModelAgenda.readAgendaJoinPaciente(uuid, idEmpresa)
      return res.status(201).json({
        message: 'agenda pesquisada.',
        agendamento: result
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao pesquisar Agendamento #2',
      })
    }
  }

  async readAgendaJoinPaciente(req, res) {
    try {
      const idEmpresa = req.idEmpresa
      const uuid = String(req.params.uuid)
      const result = await ModelAgenda.readAgendaJoinPaciente(uuid, idEmpresa)
      return res.status(201).json({
        message: 'agenda pesquisada.',
        agendamento: result
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao pesquisar Agendamento #3',
      })
    }
  }

  async updateIdConsultAtendido(req, res) {
    try {
      const { idConsulta, atendido } = req.body
      if (Validation.ValidaUpdateIdConsultAtendido({ idConsulta, atendido })) {
        return res.status(422).json({
          message: 'Erro ao atualizar dados do agendamento. #updateIdConsultAtendido'
        })
      } else {
        const uuid = String(req.params.uuid)
        await ModelAgenda.updateIdConsultAtendido({ idConsulta, atendido }, uuid, req.idEmpresa)
        return res.status(201).json({
          message: 'Agendamento atualizada com sucesso. #updateIdConsultAtendido'
        })
      }

    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao Atualizar Agendamento  #updateIdConsultAtendido'
      })
    }
  }

  async updateIdConsultAtendidoDtVencimento(req, res) {
    try {
      const { idConsulta, atendido, dataVencimento } = req.body
      if (Validation.ValidaUpdateIdConsultAtendidoDtVencimento({ idConsulta, atendido, dataVencimento })) {
        return res.status(422).json({
          message: 'Erro ao atualizar dados do agendamento. #updateIdConsultAtendido'
        })
      } else {
        const uuid = String(req.params.uuid)
        await ModelAgenda.updateIdConsultAtendidoDtVencimento({ idConsulta, atendido, dataVencimento }, uuid, req.idEmpresa)
        return res.status(201).json({
          message: 'Agendamento atualizada com sucesso. #updateIdConsultAtendido'
        })
      }

    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao Atualizar Agendamento  #updateIdConsultAtendido'
      })
    }
  }

  async readDate(req, res) {
    try {
      const idEmpresa = req.idEmpresa
      const dataInicial = req.params.dataInicial
      const dataFinal = req.params.dataFinal
      const result = await ModelAgenda.readDate(dataInicial, dataFinal, idEmpresa)
      return res.status(201).json({
        message: 'agendamentos pesquisados.',
        agendamentos: result
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao Pesquisar Agendamento #4',
      })
    }
  }

  async readDateRelatorio(req, res) {
    try {
      const idEmpresa = req.idEmpresa
      const dataInicial = req.params.dataInicial
      const dataFinal = req.params.dataFinal
      const result = await ModelAgenda.readDateRelatorio(dataInicial, dataFinal, idEmpresa)
      return res.status(201).json({
        message: 'agendamentos pesquisados.',
        agendamentos: result
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao Pesquisar Agendamento #5',
      })
    }
  }

  async readDateRelatorioPagination(req, res) {
    try {
      const idEmpresa = req.idEmpresa
      const dataInicial = req.params.dataInicial
      const dataFinal = req.params.dataFinal
      const { page = 1, limit = 5 } = req.query;

      const result = await ModelAgenda.readDateRelatorioPagination(dataInicial, dataFinal, idEmpresa, page, limit)
      return res.status(201).json({
        message: 'agendamentos pesquisados.',
        agendamentos: result
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao Pesquisar Agendamento #5',
      })
    }
  }

  async readDateRelatorioReceita(req, res) {
    try {
      const idEmpresa = req.idEmpresa
      const dataInicial = req.params.dataInicial
      const dataFinal = req.params.dataFinal
      const result = await ModelAgenda.readDateRelatorioReceita(dataInicial, dataFinal, idEmpresa)
      return res.status(201).json({
        message: 'relatório consultado',
        consulta: result
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao consultar Relatorio',
      })
    }
  }

  async readDateRelatorioReceber(req, res) {
    try {
      const idEmpresa = req.idEmpresa
      const dataInicial = req.params.dataInicial
      const dataFinal = req.params.dataFinal
      const result = await ModelAgenda.readDateRelatorioReceber(dataInicial, dataFinal, idEmpresa)
      return res.status(201).json({
        message: 'relatório consultado receber',
        consultaReceber: result
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao consultar Relatorio #2',
      })
    }
  }

  async readDateRelatorioReceberFormaPagamento(req, res) {
    try {
      const idEmpresa = req.idEmpresa
      const dataInicial = req.params.dataInicial
      const dataFinal = req.params.dataFinal
      const idFormaPagamento = req.params.idFormaPagamento
      const result = await ModelAgenda.readDateRelatorioReceberFormaPagamento(dataInicial, dataFinal, idEmpresa, idFormaPagamento)
      return res.status(201).json({
        message: 'relatório consultado receber',
        consultaReceber: result
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao consultar Relatorio #3',
      })
    }
  }

  async readDateRelatorioReceitaFormPag(req, res) {
    try {
      const idEmpresa = req.idEmpresa
      const dataInicial = req.params.dataInicial
      const dataFinal = req.params.dataFinal
      const idFormaPagamento = req.params.idFormaPagamento
      const result = await ModelAgenda.readDateRelatorioReceitaFormPag(dataInicial, dataFinal, idEmpresa, idFormaPagamento)
      return res.status(201).json({
        message: 'relatório consultado receber',
        consulta: result
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao consultar Relatorio #4',
      })
    }
  }

  async readDateAgendamentoFinalizado(req, res) {
    try {
      const idEmpresa = req.idEmpresa
      const dataInicial = req.params.dataInicial
      const dataFinal = req.params.dataFinal
      const result = await ModelAgenda.readDateAgendamentoFinalizado(dataInicial, dataFinal, idEmpresa)
      return res.status(201).json({
        message: 'agendamentos pesquisados.',
        agendamentos: result
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao consultar Relatorio #5',
      })
    }
  }

  async readDateAgendamentoFinalizadoPagination(req, res) {
    try {
      const idEmpresa = req.idEmpresa
      const dataInicial = req.params.dataInicial
      const dataFinal = req.params.dataFinal
      const { page = 1, limit = 5 } = req.query;
      const result = await ModelAgenda.readDateAgendamentoFinalizadoPagination(dataInicial, dataFinal, idEmpresa, page, limit)
      return res.status(201).json({
        message: 'agendamentos pesquisados.',
        agendamentos: result
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao consultar Relatorio #5',
      })
    }
  }

  async readDateInner(req, res) {
    try {
      const idEmpresa = req.idEmpresa
      const data = req.params.data
      const result = await ModelAgenda.readDateInner(data, idEmpresa)
      return res.status(201).json({
        message: 'agendamentos pesquisados.',
        agendamentos: result
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: 'Erro ao pesquisar Agendamento #44',
      })
    }
  }

  async readDateInnerPagination(req, res) {
    try {
      const idEmpresa = req.idEmpresa
      const data = req.params.data
      const { page = 1, limit = 5 } = req.query;
      const result = await ModelAgenda.readDateInnerPagination(data, idEmpresa, limit, page)
      return res.status(201).json({
        message: 'agendamentos pesquisados.',
        agendamentos: result
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao pesquisar Agendamento #44',
      })
    }
  }

  async readDatePaciente(req, res) {
    try {
      const idEmpresa = req.idEmpresa
      const dataInicial = req.params.dataInicial
      const dataFinal = req.params.dataFinal
      const idPaciente = req.params.idPaciente

      const paciente = await ModelCliente.findById(idPaciente, idEmpresa, ['uuid', 'idPaciente'])

      const result = await ModelAgenda.readDatePaciente(dataInicial, dataFinal, idEmpresa, paciente.idPaciente)
      return res.status(200).json({
        message: 'agendamentos pesquisados.',
        agendamentos: result
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao Pesquisar Agendamento #55',
      })
    }
  }

  async readDateVencimento(req, res) {
    try {
      const idEmpresa = req.idEmpresa
      const dataAtual = req.params.dataAtual
      const result = await ModelAgenda.readDateVencimento(idEmpresa, dataAtual)
      return res.status(201).json({
        message: 'agendamentos pesquisados.',
        agendamentos: result
      })

    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao Pesquisar Agendamento #77',
      })
    }
  }
}

export default new ControllerAgenda();