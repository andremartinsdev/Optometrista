import ModelConsulta from '../models/ModelConsulta'
import Validation from '../services/Validation'


class ControllerConsulta {
  async save(req, res) {
    try {
      const { data } = req.body
      if(Validation.ValidaConsulta(data)){
        return res.status(422).json({
          message: 'Erro na Validação dos dados da Consulta',
        })
      }else{
        const uuid = await ModelConsulta.save({ ...data, idEmpresa: req.idEmpresa })
        return res.status(201).json({
          message: 'Consulta registrada com sucesso.',
          result : uuid
        })
      }
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao registrar Consulta',
      })
    }
  }

  async update(req, res) {
    try {
      const { data } = req.body
      if(Validation.ValidaConsulta(data)){
        return res.status(422).json({
          message: 'Erro na Validação dos dados da Consulta',
        })
      }else{
        const idEmpresa = req.idEmpresa
        const uuid = String(req.params.uuid)
        await ModelConsulta.update(data, uuid, idEmpresa)
        return res.status(201).json({
          message: 'Consulta atualizada com sucesso.'
        })
      }
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao Atualizar Consulta'
      })
    }
  }

  async delete(req, res) {
    try {
      const uuid = String(req.params.uuid)
      const idEmpresa = req.idEmpresa
      await ModelConsulta.delete(uuid, idEmpresa)
      return res.status(201).json({
        message: 'Consulta deletada com sucesso.'
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao Deletar consulta'
      })
    }
  }

  async findById(req, res) {
    try {
      const uuid = String(req.params.uuid)
      const idEmpresa = req.idEmpresa
      const result = await ModelConsulta.findById(uuid, idEmpresa)
      return res.status(201).json({
        message: 'Consulta pesquisada.',
        consulta: result
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao pesquisar Consulta',
      })
    }
  }

  async findByDate(req, res) {
    try {
      const idEmpresa = req.idEmpresa
      const data = req.params.data
      const result = await ModelConsulta.findByDate(idEmpresa, data)
      return res.status(201).json({
        message: 'Consultas pesquisada.',
        consulta: result
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao pesquisar consulta #2',
      })
    }
  }
}


export default new ControllerConsulta()