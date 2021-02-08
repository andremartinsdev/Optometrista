import knex from '../config/db'
import { v4 } from 'uuid'

class ModelPaciente {
  async save(paciente) {
    const uuid = v4();
    const result = await knex('paciente').insert({
      ...paciente,
      uuid
    })
    return uuid
  }

  async update(paciente, uuid = "", idEmpresa) {
    await knex('paciente').update(paciente).where('uuid', '=', uuid).where('idEmpresa','=', idEmpresa)
  }

  async delete(uuid = "", idEmpresa) {
    await knex('paciente').delete()
      .where('uuid', '=', uuid)
      .andWhere('idEmpresa','=', idEmpresa)
  }

  async findById(uuid = "", idEmpresa) {
    const result = await knex('paciente').select()
      .where('uuid', '=', uuid)
      .andWhere('idEmpresa','=', idEmpresa)
      .first()

    return result
  }

  async readAll(idEmpresa) {
    const result = await knex('paciente').select()
      .where('idEmpresa', '=', idEmpresa)

    return result
  }

  async readParams(idEmpresa, data, colunm) {
    const dados = `%${data}%`
    const result = await knex('paciente').select()
      .where('idEmpresa', '=', idEmpresa)
      .andWhere(colunm, 'like', dados)

    return result
  }


  
  async pagination(idEmpresa, limit, page){
    const result = await knex('paciente').select()
    .where('idEmpresa', '=', idEmpresa)
    .limit(limit).offset((page - 1) * limit)

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