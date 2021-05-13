import knex from '../config/db'
import { v4 } from 'uuid'

class ModelPaciente {
  async save(paciente) {
    await knex('paciente').insert(paciente)
  }

  async update(paciente, uuid, idEmpresa) {
    await knex('paciente')
      .update(paciente)
      .where('uuid', '=', uuid)
      .andWhere('idEmpresa', '=', idEmpresa)
  }

  async delete(uuid, idEmpresa) {
    await knex('paciente').delete()
      .where('uuid', '=', uuid)
      .andWhere('idEmpresa', '=', idEmpresa)
  }

  async findById(uuid, idEmpresa, colunas = []) {
    const result = await knex('paciente').select(colunas)
      .where('uuid', '=', uuid)
      .andWhere('idEmpresa', '=', idEmpresa)
      .first()

    return result
  }

  async readParams(idEmpresa, data, colunm) {
    const dados = `%${data}%`
    const result = await knex('paciente').select()
      .where('idEmpresa', '=', idEmpresa)
      .andWhere(colunm, 'like', dados)

    return result
  }

  async readAllNames(idEmpresa) {
    const result = await knex('paciente').select(['uuid', 'nomePaciente'])
      .where('idEmpresa', '=', idEmpresa)

    return result
  }

  async readUuid(idEmpresa, uuid) {
    const result = await knex('paciente').select(['idPaciente'])
      .where('idEmpresa', '=', idEmpresa)
      .andWhere('uuid', '=', uuid)
    return result
  }

  async pagination(idEmpresa, campo, condicao, value, limit, page) {
    if (condicao == 'like') {
      value = `%${value}%`
    }

    const result = await knex('paciente').select()
      .where('idEmpresa', '=', idEmpresa)
      .andWhere(campo, condicao, value)
      .limit(limit).offset(((page - 1) * limit))
      .orderBy(campo, 'asc')

    const total = await knex('paciente')
      .where('idEmpresa', '=', idEmpresa)
      .count('idEmpresa as count')

    return {
      result,
      total
    }
  }
}


export default new ModelPaciente()