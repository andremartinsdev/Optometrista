import { v4 } from 'uuid';
import knex from '../config/db.js';

class ModelLaudo {
    async save(data) {
        const uuid = v4();
        const result = await knex('laudo').insert({ ...data, uuid })
        return {
            uuid,
            idLaudo: result
        }
    }

    async read(idPaciente, idEmpresa, limit, page, dataInicial, dataFinal) {
        const result = await knex('laudo').select()
            .where('idEmpresa', '=', idEmpresa)
            .andWhere('idPaciente', '=', idPaciente)
            .andWhere('data','>=', dataInicial)
            .andWhere('data','<=', dataFinal)
            .limit(limit).offset((page - 1) * limit)
        const total = await knex('laudo')
            .where('idEmpresa', '=', idEmpresa)
            .andWhere('idPaciente', '=', idPaciente)
            .andWhere('data','>=', dataInicial)
            .andWhere('data','<=', dataFinal)
            .count('idEmpresa as count')
            console.log(result)
        return {
            result,
            total
        }
        return result
    }
}

export default new ModelLaudo();