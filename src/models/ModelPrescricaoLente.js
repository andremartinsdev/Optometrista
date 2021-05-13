import { v4 } from 'uuid';
import knex from '../config/db.js';

class ModelPrescricaoLente {
  async save(prescricaoOculos) {
    const uuid = v4();
    const result = await knex('prescricao_lente').insert({
      ...prescricaoOculos,
      uuid
    })

    return { idPrescricaoLente: result[0], uuid }
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

  async read(idPaciente, idEmpresa, dataInicial, dataFinal, limit, page) {
    const result = await knex('prescricao_lente').select()
      .where('idEmpresa', '=', idEmpresa)
      .andWhere('idPaciente', '=', idPaciente)
      .andWhere('data', '>=', dataInicial)
      .andWhere('data', '<=', dataFinal)
      .limit(limit).offset((page - 1) * limit)
    const total = await knex('prescricao_lente')
      .where('idEmpresa', '=', idEmpresa)
      .andWhere('idPaciente', '=', idPaciente)
      .andWhere('data', '>=', dataInicial)
      .andWhere('data', '<=', dataFinal)

      .count('idEmpresa as count')
    return {
      result,
      total
    }
  }
}


export default new ModelPrescricaoLente()