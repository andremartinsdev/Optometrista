import ModelConsulta from '../models/ModelConsulta'

class ControllerConsulta {
  async save(req, res) {
    const { data } = req.body
    const uuid = await ModelConsulta.save({ ...data, idEmpresa: req.idEmpresa })
    return res.status(201).json({
      message: 'Consulta registrada com sucesso.',
      uuid: uuid
    })
  }

  async update(req, res) {
    const { data } = req.body
    const uuid = String(req.params.uuid)
    await ModelConsulta.update(data, uuid)

    return res.status(201).json({
      message: 'Consulta atualizada com sucesso.'
    })
  }

  async delete(req, res) {
    const uuid = String(req.params.uuid)
    await ModelConsulta.delete(uuid)
    return res.status(201).json({
      message: 'Consulta deletada com sucesso.'
    })
  }

  async findById(req, res) {
    const uuid = String(req.params.uuid)
    const result = await ModelConsulta.findById(uuid)
    return res.status(201).json({
      message: 'Consulta pesquisada.',
      consulta: result
    })
  }
}


export default new ControllerConsulta()