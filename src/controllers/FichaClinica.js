import ModelFichaClinica from '../models/ModelFichaClinica'
import Validation from '../services/Validation'


class ControllerFichaClinica {
  async save(req, res) {
    const { data } = req.body
    if (Validation.ValidarFicha(data)) {
      return res.status(400).json({
        message: 'Ocorreu um erro de validação, dados invalidos'
      })
    } else {
      const { json_fichaClinica } = req.body
      const uuid = await ModelFichaClinica.save({ ...data, idEmpresa: req.idEmpresa }, json_fichaClinica)
      return res.status(201).json({
        message: 'Ficha Clínica registrada com sucesso.',
        result: uuid
      })
    }

  }

  async read(req, res) {
    const idPaciente = req.params.idPaciente;
    const dataInicial = req.params.dataInicial;
    const dataFinal = req.params.dataFinal;
    const result = await ModelFichaClinica.read(idPaciente, req.idEmpresa, dataInicial, dataFinal)
    res.status(201).json({
      result
    })
  }

  async update(req, res) {
    const { data } = req.body
    const uuid = String(req.params.uuid)
    await ModelFichaClinica.update(data, uuid, req.idEmpresa)

    return res.status(201).json({
      message: 'Ficha atualizada com sucesso.'
    })
  }

  async delete(req, res) {
    const uuid = String(req.params.uuid)
    await ModelFichaClinica.delete(uuid, req.idEmpresa)
    return res.status(201).json({
      message: 'Ficha deletada com sucesso.'
    })
  }

  async findById(req, res) {
    const uuid = String(req.params.uuid)
    const result = await ModelFichaClinica.findById(uuid, req.idEmpresa)
    return res.status(201).json({
      message: 'Ficha pesquisada.',
      ficha: result
    })
  }
}

export default new ControllerFichaClinica();


