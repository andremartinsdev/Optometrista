import knex from '../config/db'
import { v4 } from 'uuid'

class ModelDespesa {
    async save(despesa){
        const uuid = v4();
        const result = await knex('despesa').insert({
            ...despesa,
            uuid
        })

        return { uuid, idDespesa: result }
    }

    async readAll(idEmpresa){
        const result = await knex('despesa').select()
        .where('idEmpresa', '=', idEmpresa)

        return result
    }

    async read(idEmpresa, uuid){
        const result = await knex('despesa').select()
        .where('idEmpresa','=', idEmpresa)
        .where('uuid','=', uuid)

        return result
    }

    async delete(idEmpresa, uuid){
        const result = await knex('despesa').delete()
        .where('idEmpresa','=', idEmpresa)
        .where('uuid','=', uuid)

        return result
      }
    
    async update(despesa, idEmpresa, uuid){
        const result = await knex('despesa').update(despesa)
        .where('idEmpresa','=', idEmpresa)
        .where('uuid', '=', uuid)

        return result
    }

    async readDate(idEmpresa, dataInicial, dataFinal){
        const result = await knex('despesa').select()
        .where('idEmpresa', '=', idEmpresa)
        .where('data', '>=', dataInicial)
        .where('data', '<=', dataFinal)

        return result
    }

    async readDatePagamento(idEmpresa, dataInicial, dataFinal, idFormaPagamento){
        const result = await knex('despesa').select()
        .where('idEmpresa', '=', idEmpresa)
        .where('data', '>=', dataInicial)
        .where('data', '<=', dataFinal)
        .where('idFormaPagamento', '=', idFormaPagamento)

        return result
    }
}

export default new ModelDespesa();