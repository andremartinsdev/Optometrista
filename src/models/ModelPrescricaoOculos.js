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

  async readDate(idEmpresa, dataInicial, dataFinal, page, limit) {
    const result = await knex('prescricao_oculos').select(['prescricao_oculos.adicao', 'prescricao_oculos.od_av',
  'prescricao_oculos.od_cilindrico', 'prescricao_oculos.od_eixo', 'prescricao_oculos.od_esferico' , 'prescricao_oculos.oe_av', 'prescricao_oculos.data'
  , 'prescricao_oculos.oe_cilindrico', 'prescricao_oculos.oe_eixo', 'prescricao_oculos.oe_esferico','paciente.nomePaciente','prescricao_oculos.uuid' ])
      .where('prescricao_oculos.idEmpresa', '=', idEmpresa)
      .andWhere('data', '>=', dataInicial)
      .andWhere('data', '<=', dataFinal)
      .leftJoin('paciente', 'prescricao_oculos.idPaciente', 'paciente.idPaciente')
      .limit(limit).offset((page - 1) * limit)
    const total = await knex('prescricao_oculos')
      .where('prescricao_oculos.idEmpresa', '=', idEmpresa)
      .andWhere('data', '>=', dataInicial)
      .andWhere('data', '<=', dataFinal)

      .count('idEmpresa as count')
    return {
      result,
      total
    }

   
  }

  async read(idPaciente, idEmpresa, dataInicial, dataFinal, page, limit) {
    const result = await knex('prescricao_oculos').select(['prescricao_oculos.adicao', 'prescricao_oculos.od_av',
  'prescricao_oculos.od_cilindrico', 'prescricao_oculos.od_eixo', 'prescricao_oculos.od_esferico' , 'prescricao_oculos.oe_av', 'prescricao_oculos.data'
  , 'prescricao_oculos.oe_cilindrico', 'prescricao_oculos.oe_eixo', 'prescricao_oculos.oe_esferico','paciente.nomePaciente','prescricao_oculos.uuid' ])
      .where('prescricao_oculos.idEmpresa', '=', idEmpresa)
      .andWhere('prescricao_oculos.idPaciente', '=', idPaciente)
      .andWhere('data', '>=', dataInicial)
      .andWhere('data', '<=', dataFinal)
      .leftJoin('paciente', 'prescricao_oculos.idPaciente', 'paciente.idPaciente')
      .limit(limit).offset((page - 1) * limit)
    const total = await knex('prescricao_oculos')
      .where('prescricao_oculos.idEmpresa', '=', idEmpresa)
      .andWhere('prescricao_oculos.idPaciente', '=', idPaciente)
      .andWhere('data', '>=', dataInicial)
      .andWhere('data', '<=', dataFinal)

      .count('idEmpresa as count')
    return {
      result,
      total
    }

   
  }
}


export default new ModelPrecricaoOculos()