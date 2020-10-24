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

  async delete(uuid = "") {
    await knex('paciente').delete()
      .where('uuid', '=', uuid)
  }

  async findById(uuid = "") {
    const result = await knex('paciente').select()
      .where('uuid', '=', uuid)
      .first()

    return result
  }
}


export default new ModelPaciente()