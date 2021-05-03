import PacienteEntity from '../entities/Paciente'
import ModelPaciente from '../models/ModelPaciente'
import Validation from '../Validation/ValidaPaciente'

class ControllerPaciente {
  async save(req, res) {
    try {
      const paciente = new PacienteEntity(req.body)
      if (Validation.ValidarPaciente(paciente)) {
        return res.status(422).json({
          message: 'Ocorreu um erro de validação, dados invalidos'
        })
      }
      const uuid = await ModelPaciente.save({ ...paciente, idEmpresa: req.idEmpresa })
      return res.status(201).json({
        message: 'Paciente registrado com sucesso.',
        uuid: uuid
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao registrar paciente',
      })
    }
  }

  async update(req, res) {
    try {
      const uuid = String(req.params.uuid)
      const idEmpresa = req.idEmpresa
      const paciente = new PacienteEntity(req.body, uuid)
      if (Validation.ValidarPaciente(paciente)) {
        return res.status(201).json({
          message: 'Erro de validação dos dados do Paciente'
        })
      }

      await ModelPaciente.update({...paciente }, uuid, idEmpresa)
      return res.status(201).json({
        message: 'Paciente atualizado com sucesso.'
      })

    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao atualizar Paciente'
      })
    }
  }

  async delete(req, res) {
    try {
      const uuid = String(req.params.uuid)
      const idEmpresa = req.idEmpresa
      await ModelPaciente.delete(uuid, idEmpresa)
      return res.status(201).json({
        message: 'Paciente deletado com sucesso.'
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao deletar paciente'
      })
    }
  }

  async findById(req, res) {
    try {
      const uuid = String(req.params.uuid)
      const idEmpresa = req.idEmpresa
      const result = await ModelPaciente.findById(uuid, idEmpresa)
      return res.status(201).json({
        message: 'Paciente pesquisado.',
        paciente: result
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao pesquisar paciente',
      })
    }
  }

  async pagination(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const result = await ModelPaciente.pagination(req.idEmpresa, limit, page)
      return res.status(201).json({
        result
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro na paginação',
      })
    }
  }

  async readCpf(req, res) {
    try {
      const cpf = String(req.params.cpf)
      const result = await ModelPaciente.readParams(req.idEmpresa, cpf, 'cpf')
      return res.status(201).json({
        result
      })

    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao pesquisar por cpf'
      })
    }
  }

  async readName(req, res) {
    try {
      const nomePaciente = String(req.params.nome)
      const result = await ModelPaciente.readParams(req.idEmpresa, nomePaciente, 'nomePaciente')
      return res.status(201).json({
        result
      })
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao pesquisar pelo Nome"
      })
    }
  }
}


export default new ControllerPaciente()