import knex from '../config/db'
import { v4 } from 'uuid'

class ModelReceita {
    async save(receita){
        const uuid = v4();
        const result = await knex('receita').insert({
            ...receita,
            uuid
        })

        return { uuid, idReceita: result }
    }

    async readAll(idEmpresa){
        const result = await knex('receita').select()
        .where('idEmpresa', '=', idEmpresa)

        return result
    }

    async read(idEmpresa, uuid){
        const result = await knex('receita').select()
        .where('idEmpresa','=', idEmpresa)
        .andWhere('uuid','=', uuid)

        return result
    }

    async delete(idEmpresa, uuid){
        const result = await knex('receita').delete()
        .where('idEmpresa','=', idEmpresa)
        .andWhere('uuid','=', uuid)

        return result
      }
    
    async update(receita, idEmpresa, uuid){
        const result = await knex('receita').update(receita)
        .where('idEmpresa','=', idEmpresa)
        .andWhere('uuid', '=', uuid)

        return result
    }

    async readDate(idEmpresa, dataInicial, dataFinal){
        const result = await knex('receita').select()
        .where('idEmpresa', '=', idEmpresa)
        .andWhere('data', '>=', dataInicial)
        .andWhere('data', '<=', dataFinal)

        return result
    }

    async readDatePagamento(idEmpresa, dataInicial, dataFinal, idFormaPagamento){
        const result = await knex('receita').select()
        .where('idEmpresa', '=', idEmpresa)
        .andWhere('data', '>=', dataInicial)
        .andWhere('data', '<=', dataFinal)
        .andWhere('idFormaPagamento', '=', idFormaPagamento)

        return result
    }
}

export default new ModelReceita();