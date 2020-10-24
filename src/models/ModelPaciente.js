import knex from '../config/db'
import { v4 } from 'uuid'

class ModelPaciente {
  async save(paciente) {
    const result = await knex('paciente').insert({
      ...paciente,
      uuid: v4()
    })
    return result[0]
  }

  async update(paciente, uuid = "") {
    await knex('paciente').update(paciente).where('uuid', '=', uuid)
  }
}


export default new ModelPaciente()