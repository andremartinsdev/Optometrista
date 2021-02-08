import validate from 'validate.js'
import ModelDespesa from '../models/ModelDespesa'
import Validation from '../services/Validation'



class ControllerDespesa {
    async save(req, res) {
        try {
            const { data } = req.body
            if (Validation.ValidaDespesa(data)) {
                return res.status(422).json({
                    message: "Erro de Validação nos dados da Despesa"
                })
            } else {
                const uuid = await ModelDespesa.save({ ...data, idEmpresa: req.idEmpresa })
                return res.status(201).json({
                    result: uuid
                })
            }
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao Registrar Despesa"
            })
        }
    }

    async readAll(req, res) {
        try {
            const result = await ModelDespesa.readAll(req.idEmpresa)
            return res.status(201).json({
                despesas: result
            })
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao Consultar despesa"
            })
        }
    }


    async read(req, res) {
        try {
            const uuid = req.params.uuid
            const result = await ModelDespesa.read(req.idEmpresa, uuid)
            return res.status(201).json({
                despesa: result
            })
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao consultar Despesa #2"
            })
        }
    }


    async delete(req, res) {
        try {
            const uuid = req.params.uuid
            const result = await ModelDespesa.delete(req.idEmpresa, uuid)
            return res.status(201).json({
                result
            })
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao Deletar despesa"
            })
        }
    }

    async update(req, res) {
        try {
            const uuid = req.params.uuid
            const { data } = req.body
            if (Validation.ValidaDespesa(data)) {
                return res.status(422).json({
                    message: "Erro na Validação dos dados da despesa"
                })
            } else {
                const result = await ModelDespesa.update(data, req.idEmpresa, uuid)
                return res.status(201).json({
                    result
                })
            }
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao atualizar despesa"
            })
        }
    }

    async readDate(req, res) {
        try {
            const dataInicial = req.params.dataInicial
            const dataFinal = req.params.dataFinal
            const result = await ModelDespesa.readDate(req.idEmpresa, dataInicial, dataFinal)
            return res.status(201).json({
                result
            })
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao consultar Despesa"
            })
        }
    }

    async readDatePagamento(req, res) {
        try {
            const dataInicial = req.params.dataInicial
            const dataFinal = req.params.dataFinal
            const idFormaPagamento = req.params.idFormaPagamento
            const result = await ModelDespesa.readDatePagamento(req.idEmpresa, dataInicial, dataFinal, idFormaPagamento)
            return res.status(201).json({
                result
            })
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao consultar despesa #4"
            })
        }
    }
}


export default new ControllerDespesa();