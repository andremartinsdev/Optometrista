import knex from '../config/db'
import { v4 } from 'uuid'

class ModelConsulta {
  async save(consulta) {
    const result = await knex('consulta').insert({
      ...consulta,
      uuid: v4()
    })
    return result[0]
  }

  async update(consulta, uuid = "") {
    await knex('consulta').update(consulta).where('uuid', '=', uuid)
  }

  async delete(uuid = "") {
    await knex('consulta').delete()
      .where('uuid', '=', uuid)
  }

  async findById(uuid = "") {
    const result = await knex('consulta').select()
      .where('uuid', '=', uuid)
      .first()

    return result
  }
}


export default new ModelConsulta()