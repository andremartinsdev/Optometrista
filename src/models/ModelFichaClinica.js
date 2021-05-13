import { v4 } from 'uuid';
import knex from '../config/db.js';


class ModelFichaClinica {
  async save(data, json) {
    const uuid = v4();
    const json_fichaClinica = JSON.stringify(json)
    const result = await knex('fichaclinica').insert({
      ...data,
      json_fichaClinica,
      uuid
    })
    return {
      uuid,
      idConsulta: result
    }
  }

  async update(fichaClinica, uuid = "", idEmpresa) {
    await knex('fichaclinica').update(fichaClinica).where('uuid', '=', uuid).where('idEmpresa','=', idEmpresa)
  }

  async read(idPaciente, idEmpresa, dataInicial, dataFinal) {
    const result = await knex('fichaclinica').select()
      .where('idEmpresa', '=', idEmpresa)
      .andWhere('idPaciente', '=', idPaciente)
      .andWhere('data', '>=', dataInicial)
      .andWhere('data', '<=', dataFinal)

    return result
  }

  async countPaciente(idPaciente, idEmpresa){
    const result = await knex('fichaclinica').count('idPaciente as pacientes')
    .where('idEmpresa', '=', idEmpresa)
    .andWhere('idPaciente', '=', idPaciente)

    return result
  }

  async readPagination(idPaciente, idEmpresa, dataInicial, dataFinal, page, limit) {
    const result = await knex('fichaclinica').select()
      .where('idEmpresa', '=', idEmpresa)
      .andWhere('idPaciente', '=', idPaciente)
      .andWhere('data', '>=', dataInicial)
      .andWhere('data', '<=', dataFinal)
      .limit(limit).offset((page - 1) * limit)
    const total = await knex('fichaclinica')
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

  

  async delete(uuid = "", idEmpresa) {
    await knex('fichaclinica').delete()
      .where('uuid', '=', uuid)
      .andWhere('idEmpresa', '=', idEmpresa)
  }

 async findById(uuid = "", idEmpresa) {
    const result = await knex('fichaclinica').select()
      .where('uuid', '=', uuid)
      .andWhere('idEmpresa','=', idEmpresa)
      .first()
    result.json_fichaClinica = JSON.parse(result.json_fichaClinica)
    return result
  }
}

export default new ModelFichaClinica();