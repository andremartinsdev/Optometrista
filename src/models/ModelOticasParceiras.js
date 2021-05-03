import knex from '../config/db'
import { v4 } from 'uuid'

class ModelOticasParceiras {
    async save(data){
        const uuid = v4();
        const result = await knex('oticaparceira').insert({
            uuid,
            ...data
        })
        return ({
          uuid,
          idOticaParceira: result  
        })
    }

    async delete(uuid, idEmpresa){
        const result = await knex('oticaparceira').delete()
        .where('idEmpresa', '=', idEmpresa)
        .andWhere('uuid','=', uuid)

        return result
    }

    async findById(idEmpresa, uuid){
        const result = await knex('oticaparceira').select()
        .where('idEmpresa','=', idEmpresa)
        .andWhere('uuid', '=', uuid)

        return result
    }


    async update(data, uuid = "", idEmpresa) {
        await knex('oticaparceira').update(data).where('uuid', '=', uuid).andWhere('idEmpresa', '=', idEmpresa)
      }


    async read(idEmpresa){
        const result = await knex('oticaparceira').select()
        .where('idEmpresa','=', idEmpresa)

        return result
    }
}

export default new ModelOticasParceiras();