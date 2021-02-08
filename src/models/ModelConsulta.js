import knex from '../config/db'
import { v4 } from 'uuid'

class ModelConsulta {
  async save(consulta) {
    const uuid = v4();
    const result = await knex('consulta').insert({
      ...consulta,
      uuid
    })
    return {
      uuid,
      idConsulta: result
    }
  }

  async update(consulta, uuid = "", idEmpresa) {
    await knex('consulta').update(consulta).where('uuid', '=', uuid).where('idEmpresa','=', idEmpresa)
  }

  async delete(uuid = "", idEmpresa) {
    await knex('consulta').delete()
      .where('uuid', '=', uuid)
      .andWhere('idEmpresa','=', idEmpresa)
  }

  async findById(uuid = "", idEmpresa) {
    const result = await knex('consulta').select()
      .where('uuid', '=', uuid)
      .andWhere('idEmpresa', '=', idEmpresa)
      .first()

    return result
  }

  async findByDate(idEmpresa, date) {
    const result = await knex('consulta').select('consulta.idPaciente','consulta.titulo','consulta.data','paciente.uuid AS uuidPaciente')
      .where('consulta.idEmpresa', '=', idEmpresa)
      .andWhere('data','=', date)
      .leftJoin('paciente', 'consulta.idPaciente', 'paciente.idPaciente')
      
    return result
  }


  async readData(dataInicial, dataFinal){
    const result = await knex('consulta').select()
    .where('data','>=', dataInicial)
    .andWhere('data','<=', dataFinal)

    return result
  }

  

  
}


export default new ModelConsulta()