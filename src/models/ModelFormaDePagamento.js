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
}

export default new ModelFormaDePagamento();