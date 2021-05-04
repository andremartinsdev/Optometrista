import PacienteEntity from '../entities/Paciente'
import ModelPaciente from '../models/ModelPaciente'
import ModelAgenda from '../models/ModelAgenda'
import ModelFicha from '../models/ModelFichaClinica'
import ValidarPaciente from '../Validation/ValidaPaciente'

class ControllerPaciente {
  async save(req, res) {
    try {
      const idEmpresa = req.idEmpresa
      const paciente = new PacienteEntity({ ...req.body, idEmpresa })
      const validate = ValidarPaciente(paciente)

      if (validate) {
        return res.status(422).json({
          message: 'Ocorreu um erro de validação, dados invalidos',
          erros: validate
        })
      }
      await ModelPaciente.save(paciente)
      return res.status(201).json({ uuid: paciente.uuid })
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
      const paciente = new PacienteEntity({ ...req.body, idEmpresa }, uuid)

      const validate = ValidarPaciente(paciente)
      if (validate) {
        return res.status(422).json({
          message: 'Ocorreu um erro de validação, dados invalidos',
          erros: validate
        })
      }

      await ModelPaciente.update({ ...paciente }, uuid, idEmpresa)
      return res.status(204).json({})
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
      const paciente = await ModelPaciente.findById(uuid, idEmpresa)

      const [resultAgenda, resultFicha] = await Promise.all([
        ModelAgenda.countPaciente(paciente.idPaciente, idEmpresa),
        ModelFicha.countPaciente(paciente.idPaciente, idEmpresa)
      ])
      if (resultAgenda[0].pacientes > 0 || resultFicha[0].pacientes > 0) {
        return res.status(409).json({
          message: `Paciente vinculado há registro(s) : Agenda =  ${resultAgenda[0].pacientes} Ficha Clínica =  ${resultFicha[0].pacientes} `
        })
      }

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
      const condicao = req.query.like ? 'like' : '='
      const value = decodeURIComponent(Object.values(req.query)[0]) || ''
      const campo = decodeURIComponent(Object.keys(req.query)[0]) || 'nomePaciente'

      const data = await ModelPaciente.pagination(req.idEmpresa, campo, condicao, value, limit, page)
      return res.status(200).json(data)
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: 'Erro na paginação',
      })
    }
  }

  async readAllNames(req, res) {
    try {
      const idEmpresa = req.idEmpresa
      const result = await ModelPaciente.readAllNames(idEmpresa)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao pesquisar paciente',
      })
    }
  }
}


export default new ControllerPaciente()