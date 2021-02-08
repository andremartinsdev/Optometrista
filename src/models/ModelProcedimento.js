import knex from '../config/db'
import { v4 } from 'uuid'

class ModelProcedimento {
    async save(date){
        const uuid = v4();
        const result = await knex('procedimentos').insert({
          ...date,
          uuid
        })
        return {
          uuid,
          idProcedimento: result
        }
    }
    async readAll(idEmpresa){
      const result = await knex('procedimentos').select()
      .where('idEmpresa','=', idEmpresa)
      return result
    }

    async read(uuid, idEmpresa){
      const result = await knex('procedimentos').select()
      .where('idEmpresa','=', idEmpresa)
      .andWhere('uuid','=', uuid)
      return result
    }

    async update(procedimento, uuid = "") {
      await knex('procedimentos').update(procedimento).where('uuid', '=', uuid)
    }

    async delete(uuid, idEmpresa){
      const result = await knex('procedimentos').delete()
      .where('idEmpresa','=', idEmpresa)
      .andWhere('uuid','=', uuid)
      return result
    }
}

export default new ModelProcedimento();