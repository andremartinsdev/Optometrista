import knex from '../config/db'
import { v4 } from 'uuid'

class ModelPrecricaoOculos {
  async save(prescricaoOculos) {
    const uuid = v4();
    const result = await knex('prescricao_oculos').insert({
      ...prescricaoOculos,
      uuid
    })
    return {idPrescricaoOculos: result[0], uuid}
  }

  async update(prescricaoOculos, uuid = "") {
    await knex('prescricao_oculos').update(prescricaoOculos).where('uuid', '=', uuid)
  }

  async delete(uuid = "") {
    await knex('prescricao_oculos').delete()
      .where('uuid', '=', uuid)
  }

  async findById(uuid = "") {
    const result = await knex('prescricao_oculos').select()
      .where('uuid', '=', uuid)
      .first()

    return result
  }

  async read(idPaciente, idEmpresa, dataInicial, dataFinal) {
    const result = await knex('prescricao_oculos').select()
      .where('idEmpresa', '=', idEmpresa)
      .andWhere('idPaciente', '=', idPaciente)
      .andWhere('data', '>=', dataInicial)
      .andWhere('data', '<=', dataFinal)

      return result
  }
}


export default new ModelPrecricaoOculos()