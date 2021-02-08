import knex from '../config/db'
import { v4 } from 'uuid'

class ModelPrescricaoLente {
  async save(prescricaoOculos) {
    const result = await knex('prescricao_lente').insert({
      ...prescricaoOculos,
      uuid: v4()
    })
    return result[0]
  }

  async update(prescricaoOculos, uuid = "") {
    await knex('prescricao_lente').update(prescricaoOculos).where('uuid', '=', uuid)
  }

  async delete(uuid = "") {
    await knex('prescricao_lente').delete()
      .where('uuid', '=', uuid)
  }

  async findById(uuid = "") {
    const result = await knex('prescricao_lente').select()
      .where('uuid', '=', uuid)
      .first()

    return result
  }

  async read(idPaciente, idEmpresa, dataInicial, dataFinal) {
    const result = await knex('prescricao_lente').select()
      .where('idEmpresa', '=', idEmpresa)
      .andWhere('idPaciente', '=', idPaciente)
      .andWhere('data', '>=', dataInicial)
      .andWhere('data', '<=', dataFinal)

      return result
  }
}


export default new ModelPrescricaoLente()