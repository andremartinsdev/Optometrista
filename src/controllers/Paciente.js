import ModelPaciente from '../models/ModelPaciente'
import Validation from '../services/Validation'

class ControllerPaciente {
  async save(req, res) {
    const { data } = req.body
    if(Validation.ValidarPaciente(data)){
      return res.status(400).json({
        message: 'Ocorreu um erro de validação, dados invalidos'
      })      
    }
    const uuid = await ModelPaciente.save({ ...data, idEmpresa: req.idEmpresa })
    return res.status(201).json({
      message: 'Paciente registrado com sucesso.',
      uuid: uuid
    })
  }

  async update(req, res) {
    const { data } = req.body
    const uuid = String(req.params.uuid)
    const idEmpresa = req.idEmpresa
    await ModelPaciente.update(data, uuid, idEmpresa)
    return res.status(201).json({
      message: 'Paciente atualizado com sucesso.'
    })
  }

  async delete(req, res) {
    const uuid = String(req.params.uuid)
    const idEmpresa = req.idEmpresa
    await ModelPaciente.delete(uuid, idEmpresa)
    return res.status(201).json({
      message: 'Paciente deletado com sucesso.'
    })
  }

  async findById(req, res) {
    const uuid = String(req.params.uuid)
    const idEmpresa = req.idEmpresa
    const result = await ModelPaciente.findById(uuid, idEmpresa)
    return res.status(201).json({
      message: 'Paciente pesquisado.',
      paciente: result
    })
  }

  async pagination(req, res) {
    const { page = 1, limit = 10 } = req.query;
    const result = await ModelPaciente.pagination(req.idEmpresa, limit, page)
    return res.status(201).json({
      result
    })
  }

  async readCpf(req, res) {
    const cpf = String(req.params.cpf)
    const result = await ModelPaciente.readParams(req.idEmpresa, cpf, 'cpf')
    return res.status(201).json({
     result
    })
  }

  async readName(req, res) {
    const nomePaciente = String(req.params.nome)
    const result = await ModelPaciente.readParams(req.idEmpresa, nomePaciente, 'nomePaciente')
    return res.status(201).json({
      result
     })
  }

  async readAll(req, res) {
    const result = await ModelPaciente.readAll(req.idEmpresa)
    return res.status(201).json({
      result
    })
  }
}


export default new ControllerPaciente()