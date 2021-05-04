import knex from '../config/db'

class ModelAgenda {
  async save(data) {
    await knex('agenda').insert(data)
  }

  async read(idEmpresa) {
    const result = await knex('agenda').select()
      .where('idEmpresa', '=', idEmpresa)
    return result
  }

  async paginationAllAgenda(idEmpresa, page, limit, dataInicial, dataFinal) {
    const result = await knex('agenda').select()
      .where('idEmpresa', '=', idEmpresa)
      .andWhere('data', '>=', dataInicial)
      .andWhere('data', '<=', dataFinal)
      .orderBy('data', 'asc')
      .limit(limit).offset((page - 1) * limit)
    const total = await knex('agenda')
      .where('idEmpresa', '=', idEmpresa)
      .andWhere('data', '>=', dataInicial)
      .andWhere('data', '<=', dataFinal)

      .count('idEmpresa as count')
    return {
      result,
      total
    }
  }

  async findById(uuid, idEmpresa) {
    const result = await knex('agenda').select()
      .where('uuid', '=', uuid)
      .andWhere('idEmpresa', '=', idEmpresa)
      .first()

    return result
  }

  async readAgendaJoinPaciente(uuid = "", idEmpresa) {
    const result = await knex('agenda').select(
      [
        'paciente.uuid AS idPaciente', 'paciente.nomePaciente',
        'paciente.dataNascimento', 'paciente.titulo',
        'agenda.data', 'agenda.horario', 'agenda.uuid', 'agenda.atendido',
        'agenda.recebido', 'agenda.valorConsulta'
      ]
    )
      .where('agenda.uuid', '=', uuid)
      .andWhere('agenda.idEmpresa', '=', idEmpresa)
      .leftJoin('paciente', 'agenda.idPaciente', 'paciente.idPaciente')
      .leftJoin('procedimentos', 'agenda.idProcedimento', 'procedimentos.idProcedimento')
      .first()

    return result
  }

  async delete(uuid = "", idEmpresa) {
    return await knex('agenda').delete()
      .where('uuid', '=', uuid)
      .andWhere('idEmpresa', '=', idEmpresa)
  }


  async update(data, idEmpresa) {
    await knex('agenda').update(data).where('uuid', '=', data.uuid).andWhere('idEmpresa', '=', idEmpresa)
  }


  async updateIdConsultAtendido(data, uuid = "", idEmpresa) {
    await knex('agenda').update(data).where('uuid', '=', uuid).andWhere('idEmpresa', '=', idEmpresa)

  }


  async updateIdConsultAtendidoDtVencimento(data, uuid = "", idEmpresa) {
    await knex('agenda').update(data).where('uuid', '=', uuid).andWhere('idEmpresa', '=', idEmpresa)

  }

  async readDate(dataInicial, dataFinal, idEmpresa) {
    const result = await knex('agenda').select()
      .where('data', '>=', dataInicial)
      .andWhere('data', '<=', dataFinal)
      .andWhere('idEmpresa', '=', idEmpresa)

    return result
  }


  async readDateRelatorio(dataInicial, dataFinal, idEmpresa) {
    const result = await knex('agenda').select('paciente.idPaciente', 'paciente.uuid AS pacienteUuid', 'paciente.nomePaciente', 'agenda.procedimento', 'agenda.data', 'agenda.horario', 'agenda.uuid', 'agenda.atendido')
      .where('agenda.data', '>=', dataInicial)
      .andWhere('agenda.data', '<=', dataFinal)
      .andWhere('agenda.idEmpresa', '=', idEmpresa)
      .andWhere('agenda.atendido', '=', false)
      .leftJoin('paciente', 'agenda.idPaciente', 'paciente.idPaciente')
    return result
  }


  async readDateRelatorioPagination(dataInicial, dataFinal, idEmpresa, page, limit) {
    const result = await knex('agenda').select('paciente.idPaciente', 'paciente.uuid AS pacienteUuid', 'paciente.nomePaciente', 'agenda.procedimento', 'agenda.data', 'agenda.horario', 'agenda.uuid', 'agenda.atendido')
      .where('agenda.data', '>=', dataInicial)
      .andWhere('agenda.data', '<=', dataFinal)
      .andWhere('agenda.idEmpresa', '=', idEmpresa)
      .andWhere('agenda.atendido', '=', false)
      .leftJoin('paciente', 'agenda.idPaciente', 'paciente.idPaciente')
      .orderBy('agenda.data', 'asc')
      .limit(limit).offset((page - 1) * limit)
    const total = await knex('agenda')
      .where('idEmpresa', '=', idEmpresa)
      .andWhere('data', '>=', dataInicial)
      .andWhere('data', '<=', dataFinal)
      .andWhere('agenda.atendido', '=', false)

      .count('idEmpresa as count')
    return {
      result,
      total
    }
  }


  async readDateRelatorioReceita(dataInicial, dataFinal, idEmpresa) {
    const result = await knex('agenda').select('agenda.valorConsulta', 'agenda.idAgendamento', 'agenda.dataPagamento', 'paciente.nomePaciente', 'formapagamento.descricao')
      .where('agenda.dataPagamento', '>=', dataInicial)
      .andWhere('agenda.dataPagamento', '<=', dataFinal)
      .andWhere('agenda.idEmpresa', '=', idEmpresa)
      .andWhere('agenda.atendido', '=', true)
      .andWhere('agenda.recebido', '=', true)
      .leftJoin('paciente', 'agenda.idPaciente', 'paciente.idPaciente')
      .leftJoin('formapagamento', 'agenda.idFormaPagamento', 'formapagamento.idFormaPagamento')

    return result
  }

  async readDateRelatorioReceitaFormPag(dataInicial, dataFinal, idEmpresa, idFormaPagamento) {
    const result = await knex('agenda').select('agenda.valorConsulta', 'agenda.idAgendamento', 'agenda.dataPagamento', 'paciente.nomePaciente', 'formapagamento.descricao')
      .where('agenda.dataPagamento', '>=', dataInicial)
      .andWhere('agenda.dataPagamento', '<=', dataFinal)
      .andWhere('agenda.idFormaPagamento', '=', idFormaPagamento)
      .andWhere('agenda.idEmpresa', '=', idEmpresa)
      .andWhere('agenda.atendido', '=', true)
      .andWhere('agenda.recebido', '=', true)
      .leftJoin('paciente', 'agenda.idPaciente', 'paciente.idPaciente')
      .leftJoin('formapagamento', 'agenda.idFormaPagamento', 'formapagamento.idFormaPagamento')

    return result
  }


  async readDateRelatorioReceber(dataInicial, dataFinal, idEmpresa) {
    const result = await knex('agenda').select('agenda.valorConsulta')
      .where('agenda.data', '>=', dataInicial)
      .andWhere('agenda.data', '<=', dataFinal)
      .andWhere('agenda.idEmpresa', '=', idEmpresa)


    return result
  }


  async readDateRelatorioReceberFormaPagamento(dataInicial, dataFinal, idEmpresa, idFormaPagamento) {
    const result = await knex('agenda').select('agenda.valorConsulta')
      .where('agenda.dataPagamento', '>=', dataInicial)
      .andWhere('agenda.dataPagamento', '<=', dataFinal)
      .andWhere('agenda.idEmpresa', '=', idEmpresa)
      .andWhere('agenda.idFormaPagamento', '=', idFormaPagamento)


    return result
  }

  async readDateAgendamentoFinalizadoPagination(dataInicial, dataFinal, idEmpresa, page, limit) {
    const result = await knex('agenda').select('paciente.idPaciente', 'paciente.nomePaciente', 'paciente.dataNascimento', 'paciente.uuid AS pacienteUuid', 'agenda.data', 'agenda.procedimento', 'agenda.horario', 'agenda.uuid', 'agenda.atendido', 'agenda.valorConsulta')
      .where('agenda.data', '>=', dataInicial)
      .andWhere('agenda.data', '<=', dataFinal)
      .andWhere('agenda.idEmpresa', '=', idEmpresa)
      .andWhere('agenda.atendido', '=', true)
      .leftJoin('paciente', 'agenda.idPaciente', 'paciente.idPaciente')
      .orderBy('agenda.data', 'asc')
      .limit(limit).offset((page - 1) * limit)
    const total = await knex('agenda')
      .where('idEmpresa', '=', idEmpresa)
      .andWhere('agenda.data', '>=', dataInicial)
      .andWhere('agenda.data', '<=', dataFinal)
      .andWhere('agenda.atendido', '=', true)

      .count('idEmpresa as count')
    return {
      result,
      total
    }

  }

  async readDateAgendamentoFinalizado(dataInicial, dataFinal, idEmpresa) {
    const result = await knex('agenda').select('paciente.idPaciente', 'paciente.nomePaciente', 'paciente.dataNascimento', 'paciente.uuid AS pacienteUuid', 'agenda.data', 'agenda.procedimento', 'agenda.horario', 'agenda.uuid', 'agenda.atendido', 'agenda.valorConsulta')
      .where('agenda.data', '>=', dataInicial)
      .andWhere('agenda.data', '<=', dataFinal)
      .andWhere('agenda.idEmpresa', '=', idEmpresa)
      .andWhere('agenda.atendido', '=', true)
      .leftJoin('paciente', 'agenda.idPaciente', 'paciente.idPaciente')
    return result
  }

  async readDateInner(data, idEmpresa, limit, page) {
    const result = await knex('agenda').select('paciente.idPaciente', 'paciente.nomePaciente', 'paciente.uuid AS pacienteUuid', 'agenda.data', 'agenda.horario', 'agenda.uuid', 'agenda.atendido')
      .where('agenda.data', '=', data)
      .andWhere('agenda.idEmpresa', '=', idEmpresa)
      .leftJoin('paciente', 'agenda.idPaciente', 'paciente.idPaciente')
    return result

  }


  async readDateInnerPagination(data, idEmpresa, limit, page) {
    const result = await knex('agenda').select('paciente.idPaciente', 'paciente.nomePaciente', 'agenda.procedimento', 'paciente.uuid AS pacienteUuid', 'agenda.data', 'agenda.horario', 'agenda.uuid', 'agenda.atendido')
      .where('agenda.data', '=', data)
      .andWhere('agenda.idEmpresa', '=', idEmpresa)
      .leftJoin('paciente', 'agenda.idPaciente', 'paciente.idPaciente')
      .orderBy('agenda.horario', 'asc')

      .limit(limit).offset((page - 1) * limit)
    const total = await knex('agenda')
      .where('idEmpresa', '=', idEmpresa)
      .andWhere('data', '=', data)
      .count('idEmpresa as count')
    return {
      result,
      total
    }

  }


  async readDatePaciente(dataInicial, dataFinal, idEmpresa, idPaciente) {
    const result = await knex('agenda').select()
      .where('data', '>=', dataInicial)
      .andWhere('data', '<=', dataFinal)
      .andWhere('idPaciente', '=', idPaciente)
      .andWhere('idEmpresa', '=', idEmpresa)

    return result
  }

  async countPaciente(idPaciente, idEmpresa) {
    const result = await knex('agenda').count('idPaciente as pacientes')
      .where('idEmpresa', '=', idEmpresa)
      .andWhere('idPaciente', '=', idPaciente)

    return result
  }

  async countFormaPagamento(idFormaPagamento, idEmpresa) {
    const result = await knex('agenda').count('idFormaPagamento as formaPagamento')
      .where('idEmpresa', '=', idEmpresa)
      .andWhere('idFormaPagamento', '=', idFormaPagamento)

    return result
  }

  async countOticaParceira(idOticaParceira, idEmpresa) {
    const result = await knex('agenda').count('idOticaParceira as oticas')
      .where('idEmpresa', '=', idEmpresa)
      .andWhere('idOticaParceira', '=', idOticaParceira)

    return result
  }



  async readDateVencimento(idEmpresa, dataAtual) {
    const result = await knex('agenda').select('paciente.idPaciente', 'paciente.nomePaciente', 'paciente.dataNascimento', 'paciente.uuid AS pacienteUuid', 'agenda.data', 'agenda.procedimento', 'agenda.horario', 'agenda.uuid', 'agenda.atendido', 'agenda.valorConsulta', 'agenda.dataVencimento')
      .where('agenda.dataVencimento', '>=', dataAtual)
      .andWhere('agenda.idEmpresa', '=', idEmpresa)
      .leftJoin('paciente', 'agenda.idPaciente', 'paciente.idPaciente')


    return result
  }
}

export default new ModelAgenda();