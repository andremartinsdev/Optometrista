import ModelPrescrissaoOculos from '../models/ModelPrescricaoOculos'
import Validation from '../services/Validation'

class ControllerPrescrissaoOculos {
  async save(req, res) {
    try {
      const { data } = req.body
      if(Validation.ValidaPrecricaoOculos(data)){
        return res.status(422).json({
          message: 'Erro de validação nos dados da Prescrição',
        })
      }else{
        const uuid = await ModelPrescrissaoOculos.save({ ...data, idEmpresa: req.idEmpresa })
        return res.status(201).json({
          message: 'Prescrição registrado com sucesso.',
          uuid: uuid
        })
      }
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao Registrar Prescrição',
      })
    }
  }

  async update(req, res) {
    try {
      const { data } = req.body
      if(Validation.ValidaPrecricaoOculos(data)){
        return res.status(422).json({
          message: 'Erro de validação dos dados da Prescrição'
        })
      }else{
        const uuid = String(req.params.uuid)
        await ModelPrescrissaoOculos.update(data, uuid)
        return res.status(201).json({
          message: 'Prescrição atualizada com sucesso.'
        })
      }
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao Atualizar Prescrição',
      })
    }
  }

  async delete(req, res) {
    try {
      const uuid = String(req.params.uuid)
      await ModelPrescrissaoOculos.delete(uuid)
      return res.status(201).json({
        message: 'Prescrição deletada com sucesso.'
      })
    } catch (error) {
        return res.status(500).json({
        message: 'Erro ao Deletar Prescrição',
      })
    }
  }

  async findById(req, res) {
    try {
      const uuid = String(req.params.uuid)
      const result = await ModelPrescrissaoOculos.findById(uuid)
      return res.status(201).json({
        message: 'Prescrição pesquisada.',
        prescricao: result
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao Pesquisar Prescrição',
      })
    }
  }

  async readParams(req, res) {
    try {
      const idPaciente = req.params.idPaciente;
        const dataInicial = req.params.dataInicial;
        const dataFinal = req.params.dataFinal;
        const result = await ModelPrescrissaoOculos.read(idPaciente, req.idEmpresa, dataInicial, dataFinal)
        res.status(201).json({
          result
        })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao Registrar Prescrição #2',
      })

    }
  }
}

export default new ControllerPrescrissaoOculos()
