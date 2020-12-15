import ModelPrescricaoLente from '../models/ModelPrescricaoLente'

class ControllerPrescrissaoOculos {
  async save(req, res) {
    const { data } = req.body
    const uuid = await ModelPrescricaoLente.save({ ...data, idEmpresa: req.idEmpresa })
    return res.status(201).json({
      message: 'Prescrição registrado com sucesso.',
      uuid: uuid
    })
  }

  async update(req, res) {
    const { data } = req.body
    const uuid = String(req.params.uuid)
    await ModelPrescricaoLente.update(data, uuid)

    return res.status(201).json({
      message: 'Prescrição atualizada com sucesso.'
    })
  }

  async delete(req, res) {
    const uuid = String(req.params.uuid)
    await ModelPrescricaoLente.delete(uuid)
    return res.status(201).json({
      message: 'Prescrição deletada com sucesso.'
    })
  }

  async findById(req, res) {
    const uuid = String(req.params.uuid)
    const result = await ModelPrescricaoLente.findById(uuid)
    return res.status(201).json({
      message: 'Prescrição pesquisada.',
      prescricao: result
    })
  }

  async readParams(req, res) {
    const idPaciente = req.params.idPaciente;
      const dataInicial = req.params.dataInicial;
      const dataFinal = req.params.dataFinal;
      const result = await ModelPrescricaoLente.read(idPaciente, req.idEmpresa, dataInicial, dataFinal)
      res.status(201).json({
        result
      })
  }
}

export default new ControllerPrescrissaoOculos()
