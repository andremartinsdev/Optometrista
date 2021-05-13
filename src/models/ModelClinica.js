import { v4 } from 'uuid';
import knex from '../config/db.js';


class ModelClinica {
    async save(date){
        const uuid = v4();
        const result = await knex('clinica').insert({...date, uuid})
        return {
            uuid,
            idClinica: result
        }
    }

    async read(idEmpresa){
        const result = await knex('clinica').select()
        .where('idEmpresa', '=', idEmpresa)
        return result
    }


    async update(uuid, idEmpresa, data){
        const result = await knex('clinica')
        .update(data)
        .where('uuid','=', uuid)
        .andWhere('idEmpresa','=', idEmpresa)

        return result 
    }
}

export default new ModelClinica();