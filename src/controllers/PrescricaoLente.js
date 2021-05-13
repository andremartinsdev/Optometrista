import ModelPrescricaoLente from '../models/ModelPrescricaoLente.js'
import Validation from '../Validation/ValidaPrescricaoLente.js'

class ControllerPrescrissaoLente {
  async save(req, res) {
    try {
      const { idConsulta, idPaciente, data, od_esferico, od_cilindrico, od_eixo, od_av, oe_esferico, oe_cilindrico, oe_eixo, oe_av, lente, observacao } = req.body
      console.log(Validation.ValidaPrecricaoLente({ idConsulta, idPaciente, data, od_esferico, od_cilindrico, od_eixo, od_av, oe_esferico, oe_cilindrico, oe_eixo, oe_av, lente, observacao }))
      if(Validation.ValidaPrecricaoLente({ idConsulta, idPaciente, data, od_esferico, od_cilindrico, od_eixo, od_av, oe_esferico, oe_cilindrico, oe_eixo, oe_av, lente, observacao })){
        return res.status(422).json({
          message: 'Erro na validação dos dados da Prescrição - Lente',
        })
      }else{
        const uuid = await ModelPrescricaoLente.save({ idPaciente, idConsulta, idEmpresa: req.idEmpresa , data, od_esferico, od_cilindrico, od_eixo, od_av, oe_esferico, oe_cilindrico, oe_eixo, oe_av, })
        return res.status(201).json({
          message: 'Prescrição registrado com sucesso.',
          uuid: uuid
        })
      }
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao salvar Prescrição' + error,
      })
    }
  }

  async update(req, res) {
    try {
      const { idConsulta, idPaciente, data, od_esferico, od_cilindrico, od_eixo, od_av, oe_esferico, oe_cilindrico, oe_eixo, oe_av, lente, observacao } = req.body
      if(Validation.ValidaPrecricaoLente({ idConsulta, idPaciente, data, od_esferico, od_cilindrico, od_eixo, od_av, oe_esferico, oe_cilindrico, oe_eixo, oe_av, lente, observacao })){
        return res.status(422).json({
          message: 'Prescrição atualizada com sucesso.'
        })
      }else{
        const uuid = String(req.params.uuid)
        await ModelPrescricaoLente.update({idConsulta, idPaciente, data, od_esferico, od_cilindrico, od_eixo, od_av, oe_esferico, oe_cilindrico, oe_eixo, oe_av, lente, observacao}, uuid)
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
