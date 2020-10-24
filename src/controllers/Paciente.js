import ModelPaciente from '../models/ModelPaciente'

class ControllerPaciente {
  async save(req, res) {
    const { data } = req.body
    const uuid = await ModelPaciente.save({ ...data, idEmpresa: req.idEmpresa })
    return res.status(201).json({
      message: 'Paciente registrado com sucesso.',
      uuid: uuid
    })
  }

  async update(req, res) {
    const { data } = req.body
    const uuid = String(req.params.uuid)
    await ModelPaciente.update(data, uuid)

    return res.status(201).json({
      message: 'Paciente atualizado com sucesso.'
    })
  }

  async delete(req, res) {
    const uuid = String(req.params.uuid)
    await ModelPaciente.delete(uuid)
    return res.status(201).json({
      message: 'Paciente deletado com sucesso.'
    })
  }

  async findById(req, res) {
    const uuid = String(req.params.uuid)
    const result = await ModelPaciente.findById(uuid)
    return res.status(201).json({
      message: 'Paciente pesquisado.',
      paciente: result
    })
  }
}


export default new ControllerPaciente()