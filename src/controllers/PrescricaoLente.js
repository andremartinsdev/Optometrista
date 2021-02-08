import ModelPrescricaoLente from '../models/ModelPrescricaoLente'
import Validation from '../services/Validation'

class ControllerPrescrissaoLente {
  async save(req, res) {
    try {
      const { data } = req.body
      if(Validation.ValidaPrecricaoLente(data)){
        return res.status(422).json({
          message: 'Erro na validação dos dados da Prescrição - Lente',
        })
      }else{
        const uuid = await ModelPrescricaoLente.save({ ...data, idEmpresa: req.idEmpresa })
        return res.status(201).json({
          message: 'Prescrição registrado com sucesso.',
          uuid: uuid
        })
      }
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao salvar Prescrição',
      })
    }
  }

  async update(req, res) {
    try {
      const { data } = req.body
      if(Validation.ValidaPrecricaoLente(data)){
        return res.status(422).json({
          message: 'Prescrição atualizada com sucesso.'
        })
      }else{
        const uuid = String(req.params.uuid)
        await ModelPrescricaoLente.update(data, uuid)
        return res.status(201).json({
          message: 'Prescrição atualizada com sucesso.'
        })
      }

    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao atualizar Prescrição '
      })
      
    }
  }

  async delete(req, res) {
    try {
      const uuid = String(req.params.uuid)
      await ModelPrescricaoLente.delete(uuid)
      return res.status(201).json({
        message: 'Prescrição deletada com sucesso.'
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao Deletar Prescrição'
      })
    }
  }

  async findById(req, res) {
    try {
      const uuid = String(req.params.uuid)
      const result = await ModelPrescricaoLente.findById(uuid)
      return res.status(201).json({
        message: 'Prescrição pesquisada.',
        prescricao: result
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao pesquisar Prescrição',
      })
    }
  }

  async readParams(req, res) {
    try {
      const idPaciente = req.params.idPaciente;
        const dataInicial = req.params.dataInicial;
        const dataFinal = req.params.dataFinal;
        const result = await ModelPrescricaoLente.read(idPaciente, req.idEmpresa, dataInicial, dataFinal)
        res.status(201).json({
          result
        })
    } catch (error) {
      res.status(500).json({
        message: "Erro ao pesquisar Prescrição"
      })
    }
  }
}

export default new ControllerPrescrissaoLente()
