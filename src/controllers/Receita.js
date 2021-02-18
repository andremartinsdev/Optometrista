import ModelReceita from '../models/ModelReceita'
import Validation from '../Validation/ValidaReceita'


class ControllerReceita {
    async save(req, res) {
        try {
            const { descricaoReceita, data, valor, receitaPaga, idFormaPagamento, observacao } = req.body
            if(Validation.ValidaReceita({ descricaoReceita, data, valor, receitaPaga, idFormaPagamento, observacao })){
                return res.status(422).json({
                    message: "Erro de validação nos dados da Receita"
                })
            }else{
                const uuid = await ModelReceita.save({ descricaoReceita, data, valor, receitaPaga, idFormaPagamento, observacao, idEmpresa: req.idEmpresa })
                return res.status(201).json({
                    result: uuid,
                    message: "Receita Registrada com Sucesso"
                })
            }
        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao Registrar Receita'
            })
        }
    }

    async readAll(req, res) {
        try {
            const result = await ModelReceita.readAll(req.idEmpresa)
            return res.status(201).json({
                receitas: result,
                message: "Receita pesquisada com sucesso"
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao pesquisar Receita'
            })
        }
    }


    async read(req, res) {
        try {
            const uuid = req.params.uuid
            const result = await ModelReceita.read(req.idEmpresa, uuid)
            return res.status(201).json({
                receita: result,
                message: "Receita pesquisada com sucesso"
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao pesquisar Receita #2'
            })
        }
    }


    async delete(req, res) {
        try {
            const uuid = req.params.uuid
            const result = await ModelReceita.delete(req.idEmpresa, uuid)
            return res.status(201).json({
                result,
                message: "Receita deletada com Sucesso"
            })
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao deletar Receita"
            })
        }
    }

    async update(req, res) {
        try {
            const uuid = req.params.uuid
            const { descricaoReceita, data, valor, receitaPaga, idFormaPagamento, observacao } = req.body
            if(Validation.ValidaReceita({ descricaoReceita, data, valor, receitaPaga, idFormaPagamento, observacao })){
                return res.status(422).json({
                    message: "Erro de validação nos dados da Receita"
                })
            }else{
                const result = await ModelReceita.update({descricaoReceita, data, valor, receitaPaga, idFormaPagamento, observacao}, req.idEmpresa, uuid)
                return res.status(201).json({
                    result,
                    message: "Receita Atualizada com sucesso"
                })
            }
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao atualizar Receita"
            })
        }
    }

    async readDate(req, res) {
        try {
            const dataInicial = req.params.dataInicial
            const dataFinal = req.params.dataFinal
            const result = await ModelReceita.readDate(req.idEmpresa, dataInicial, dataFinal)

            return res.status(201).json({
                result,
                message: "Receita pesquisada com Sucesso #3"
            })
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao pesquisar Receita"
            })
        }
    }

    async readDatePagamento(req, res) {
        try {
            const dataInicial = req.params.dataInicial
            const dataFinal = req.params.dataFinal
            const idFormaPagamento = req.params.idFormaPagamento

            const result = await ModelReceita.readDatePagamento(req.idEmpresa, dataInicial, dataFinal, idFormaPagamento)

            res.status(201).json({
                result
            })
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao pesquisar Receita #4"
            })
        }
    }
}


export default new ControllerReceita();