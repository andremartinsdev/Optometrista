import ModelConsulta from '../models/ModelConsulta'

class ControllerConsulta {
  async save(req, res) {
    const { data } = req.body
    const uuid = await ModelConsulta.save({ ...data, idEmpresa: req.idEmpresa })
    return res.status(201).json({
      message: 'Consulta registrada com sucesso.',
      result : uuid
    })
  }

  async update(req, res) {
    const { data } = req.body
    const idEmpresa = req.idEmpresa
    const uuid = String(req.params.uuid)
    await ModelConsulta.update(data, uuid, idEmpresa)

    return res.status(201).json({
      message: 'Consulta atualizada com sucesso.'
    })
  }

  async delete(req, res) {
    const uuid = String(req.params.uuid)
    const idEmpresa = req.idEmpresa
    await ModelConsulta.delete(uuid, idEmpresa)
    return res.status(201).json({
      message: 'Consulta deletada com sucesso.'
    })
  }

  async findById(req, res) {
    const uuid = String(req.params.uuid)
    const idEmpresa = req.idEmpresa
    const result = await ModelConsulta.findById(uuid, idEmpresa)
    return res.status(201).json({
      message: 'Consulta pesquisada.',
      consulta: result
    })
  }

  async findByDate(req, res) {
    const idEmpresa = req.idEmpresa
    const data = req.params.data
    const result = await ModelConsulta.findByDate(idEmpresa, data)
    return res.status(201).json({
      message: 'Consultas pesquisada.',
      consulta: result
    })
  }
}


export default new ControllerConsulta()