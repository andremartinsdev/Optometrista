import ModelFichaClinica from '../models/ModelFichaClinica'
import Validation from '../Validation/ValidaFichaClinica'


class ControllerFichaClinica {
  async save(req, res) {
    try {
      const { idConsulta, idPaciente, data, json_fichaClinica } = req.body
      if (Validation.ValidarFicha({idConsulta, idPaciente, data})) {
        return res.status(422).json({
          message: 'Ocorreu um erro de validação, dados invalidos'
        })
      } else {
        const uuid = await ModelFichaClinica.save({ idConsulta, idPaciente, data, idEmpresa: req.idEmpresa }, json_fichaClinica)
        return res.status(201).json({
          message: 'Ficha Clínica registrada com sucesso.',
          result: uuid
        })
      }
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao Registrar Ficha Clinica',
      })
    }

  }

  async read(req, res) {
    try {
      const idPaciente = req.params.idPaciente;
      const dataInicial = req.params.dataInicial;
      const dataFinal = req.params.dataFinal;
      const result = await ModelFichaClinica.read(idPaciente, req.idEmpresa, dataInicial, dataFinal)
      return res.status(201).json({
        result
      })
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao consultar ficha clinica"
      })
    }
  }

  async readPagination(req, res) {
    try {
      const idPaciente = req.params.idPaciente;
      const dataInicial = req.params.dataInicial;
      const dataFinal = req.params.dataFinal;
      const { page = 1, limit = 5 } = req.query;

      const result = await ModelFichaClinica.readPagination(idPaciente, req.idEmpresa, dataInicial, dataFinal, page, limit)
      return res.status(201).json({
        result
      })
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao consultar ficha clinica"
      })
    }
  }
  

  async update(req, res) {
    try {
      const { data } = req.body
      if (!data.json_fichaClinica) {
        return res.status(422).json({
          message: 'Ocorreu um erro de validação, dados invalidos'
        })
      } else {
        const uuid = String(req.params.uuid)
        await ModelFichaClinica.update(data, uuid, req.idEmpresa)
        return res.status(201).json({
          message: 'Ficha atualizada com sucesso.'
        })
      }

    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao Atualizar ficha clinica'
      })
    }
  }

  async delete(req, res) {
    try {
      const uuid = String(req.params.uuid)
      await ModelFichaClinica.delete(uuid, req.idEmpresa)
      return res.status(201).json({
        message: 'Ficha deletada com sucesso.'
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao Deletar ficha clinica'
      })
    }
  }

  async findById(req, res) {
    try {
      const uuid = String(req.params.uuid)
      const result = await ModelFichaClinica.findById(uuid, req.idEmpresa)
      return res.status(201).json({
        message: 'Ficha pesquisada.',
        ficha: result
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao consultar ficha clinica',
      })
    }
  }
}

export default new ControllerFichaClinica();


