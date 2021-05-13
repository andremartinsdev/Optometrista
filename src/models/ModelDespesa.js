import { v4 } from 'uuid';
import knex from '../config/db.js';

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
        .andWhere('uuid','=', uuid)

        return result
    }

    async delete(idEmpresa, uuid){
        const result = await knex('despesa').delete()
        .where('idEmpresa','=', idEmpresa)
        .andWhere('uuid','=', uuid)

        return result
      }
    

      async countFormaPagamento(idFormaPagamento, idEmpresa){
        const result = await knex('despesa').count('idFormaPagamento as formaPagamento')
        .where('idEmpresa', '=', idEmpresa)
        .andWhere('idFormaPagamento', '=', idFormaPagamento)
    
        return result
      }

      
  async countOticaParceira(idOticaParceira, idEmpresa){
    const result = await knex('despesa').count('idOticaParceira as oticas')
    .where('idEmpresa', '=', idEmpresa)
    .andWhere('idOticaParceira', '=', idOticaParceira)

    return result
  }

    async update(despesa, idEmpresa, uuid){
        const result = await knex('despesa').update(despesa)
        .where('idEmpresa','=', idEmpresa)
        .andWhere('uuid', '=', uuid)

        return result
    }

    async readDate(idEmpresa, dataInicial, dataFinal){
        const result = await knex('despesa').select()
        .where('idEmpresa', '=', idEmpresa)
        .andWhere('data', '>=', dataInicial)
        .andWhere('data', '<=', dataFinal)

        return result
    }

    async readDatePagamento(idEmpresa, dataInicial, dataFinal, idFormaPagamento){
        const result = await knex('despesa').select()
        .where('idEmpresa', '=', idEmpresa)
        .andWhere('data', '>=', dataInicial)
        .andWhere('data', '<=', dataFinal)
        .andWhere('idFormaPagamento', '=', idFormaPagamento)

        return result
    }
}

export default new ModelDespesa();