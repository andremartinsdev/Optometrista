import knex from '../config/db'
import { v4 } from 'uuid'

class ModelFormaDePagamento {
    async save(data){
        const uuid = v4();
        const result = await knex('formapagamento').insert({
            uuid,
            ...data
        })
        return ({
          uuid,
          idFormaPagamento: result  
        })
    }

    async read(idEmpresa){
        const result = await knex('formapagamento').select()
        .where('idEmpresa','=', idEmpresa)

        return result
    }


    async update(data, uuid = "", idEmpresa) {
        await knex('formapagamento').update(data).where('uuid', '=', uuid).andWhere('idEmpresa', '=', idEmpresa)
      }

    async findById(idEmpresa, uuid){
        const result = await knex('formapagamento').select()
        .where('idEmpresa','=', idEmpresa)
        .andWhere('uuid', '=', uuid)

        return result
    }

    async delete(uuid, idEmpresa){
        const result = await knex('formapagamento').delete()
        .where('idEmpresa', '=', idEmpresa)
        .andWhere('uuid','=', uuid)

        return result
    }

    
}

export default new ModelFormaDePagamento();