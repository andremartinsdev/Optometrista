import knex from '../config/db'
import { v4 } from 'uuid'

class ModelAgenda {
    async save(data){
        const uuid = v4();
        const result = await knex('agenda').insert({
          ...data,
          uuid
        })
        return {
          uuid,
          idAgendamento: result
        }
    }

    async read(idEmpresa){
        const result = await knex('agenda').select()
        .where('idEmpresa','=', idEmpresa)
        return result
    }

    async findById(uuid = "", idEmpresa) {
        const result = await knex('agenda').select()
          .where('uuid', '=', uuid)
          .where('idEmpresa', '=', idEmpresa)
          .first()
    
        return result
      }

      async readAgendaJoinPaciente(uuid = "", idEmpresa) {
        const result = await knex('agenda').select('paciente.idPaciente','paciente.uuid AS pacienteUuid','paciente.nomePaciente','paciente.dataNascimento','agenda.procedimento', 'agenda.data', 'agenda.horario', 'agenda.uuid', 'agenda.atendido', 'agenda.recebido', 'agenda.valorConsulta')
          .where('agenda.uuid', '=', uuid)
          .where('agenda.idEmpresa', '=', idEmpresa)
          .leftJoin('paciente','agenda.idPaciente', 'paciente.idPaciente')
          .first()
    
        return result
      }

      async delete(uuid = "", idEmpresa) {
       return await knex('agenda').delete()
          .where('uuid', '=', uuid)
          .where('idEmpresa', '=', idEmpresa)
      }

      
  async update(data, uuid = "", idEmpresa) {
    await knex('agenda').update(data).where('uuid', '=', uuid).where('idEmpresa','=', idEmpresa)
  }

    async readDate(dataInicial, dataFinal, idEmpresa){
      const result = await knex('agenda').select()
      .where('data', '>=', dataInicial)
      .where('data', '<=', dataFinal)
      .where('idEmpresa','=', idEmpresa)

      return result
    }


    async readDateRelatorio(dataInicial, dataFinal, idEmpresa){
      const result = await knex('agenda').select('paciente.idPaciente','paciente.uuid AS pacienteUuid','paciente.nomePaciente','agenda.procedimento', 'agenda.data', 'agenda.horario', 'agenda.uuid', 'agenda.atendido')
      .where('agenda.data', '>=', dataInicial)
      .where('agenda.data', '<=', dataFinal)
      .where('agenda.idEmpresa','=', idEmpresa)
      .where('agenda.atendido','=', false)
      .leftJoin('paciente','agenda.idPaciente', 'paciente.idPaciente')
      return result
    }

    async readDateAgendamentoFinalizado(dataInicial, dataFinal, idEmpresa){
      const result = await knex('agenda').select('paciente.idPaciente','paciente.nomePaciente','paciente.dataNascimento', 'paciente.uuid AS pacienteUuid','agenda.data','agenda.procedimento', 'agenda.horario', 'agenda.uuid','agenda.atendido', 'agenda.valorConsulta')
      .where('agenda.data', '>=', dataInicial)
      .where('agenda.data', '<=', dataFinal)
      .where('agenda.idEmpresa','=', idEmpresa)
      .where('agenda.atendido','=', true)
      .leftJoin('paciente','agenda.idPaciente', 'paciente.idPaciente')
      return result
    }

    async readDateInner(data, idEmpresa){
      const result = await knex('agenda').select('paciente.idPaciente','paciente.nomePaciente', 'agenda.procedimento', 'paciente.uuid AS pacienteUuid','agenda.data', 'agenda.horario', 'agenda.uuid', 'agenda.atendido')
      .where('agenda.data', '=', data)
      .where('agenda.idEmpresa','=', idEmpresa)
      .leftJoin('paciente','agenda.idPaciente', 'paciente.idPaciente')
      return result
    }


    async readDatePaciente(dataInicial, dataFinal, idEmpresa, idPaciente){
      const result = await knex('agenda').select()
      .where('data', '>=', dataInicial)
      .where('data', '<=', dataFinal)
      .where('idPaciente', '=', idPaciente)
      .where('idEmpresa','=', idEmpresa)

      return result
    }
}

export default new ModelAgenda();