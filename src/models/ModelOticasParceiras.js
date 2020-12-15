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

    async read(idEmpresa){
        const result = await knex('oticaparceira').select()
        .where('idEmpresa','=', idEmpresa)

        return result
    }
}

export default new ModelOticasParceiras();