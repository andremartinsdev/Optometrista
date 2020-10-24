import ModelPaciente from '../models/ModelPaciente'

class ControllerPaciente {
  async save(req, res) {
    const { data } = req.body
    const uuid = await ModelPaciente.save(data)
    return res.status(201).json({
      message: 'Paciente registrado com sucesso',
      uuid: uuid
    })
  }

  async update(req, res) {
    const { data } = req.body
    const uuid = String(req.params.uuid)
    await ModelPaciente.update(data, uuid)
    
    return res.status(201).json({
      message: 'Paciente atualizado com sucesso'
    })
  }
}


export default new ControllerPaciente()