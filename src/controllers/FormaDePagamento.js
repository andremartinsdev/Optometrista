import ModelAgenda from '../models/ModelAgenda.js'
import ModelDespesa from '../models/ModelDespesa.js'
import ModelFormaDePagamento from '../models/ModelFormaDePagamento.js'
import Validation from '../Validation/ValidaFormaPagamento.js'


class ControllerFormaDePagamento {
    async save(req, res) {
        try {
            const { descricao } = req.body
            if (Validation.ValidaFormaDePagamento({ descricao })) {
                return res.status(422).json({
                    message: "Erro na validação dos dados da Forma de pagamento",
                })
            } else {
                const idEmpresa = req.idEmpresa
                const uuid = await ModelFormaDePagamento.save({ descricao, idEmpresa: idEmpresa })
                return res.status(201).json({
                    message: "Forma de pagamento cadastrada",
                    uuid: uuid
                })
            }
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao salvar forma de pagamento",
            })
        }
    }

    async read(req, res) {
        try {
            const idEmpresa = req.idEmpresa
            const result = await ModelFormaDePagamento.read(idEmpresa)
            return res.status(201).json({
                message: "Forma de pagamento pesquisada",
                formasPagamento: result
            })
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao pesquisar Forma de Pagamento",
            })
        }
    }

async update(req, res) {
    try {
        const { descricao } = req.body
        const uuid = req.params.uuid
        const idEmpresa = req.idEmpresa
        const result = await ModelFormaDePagamento.update({ descricao }, uuid, idEmpresa)
        return res.status(201).json({
            message: "Forma de Pagamento Atualizada",
            result
        })
    } catch (error) {
        
    }
}

    async findById(req, res){
        const uuid = req.params.uuid
        const idEmpresa = req.idEmpresa
        const formaPagamento = await ModelFormaDePagamento.findById(idEmpresa, uuid)
        return res.status(201).json({
            formaPagamento
        })
    }

    async delete(req, res) {
        try {
            const uuid = req.params.uuid
            const idEmpresa = req.idEmpresa
            const formaPagamento = await ModelFormaDePagamento.findById(idEmpresa, uuid)
            const countForma = await Promise.all([await ModelAgenda.countFormaPagamento(formaPagamento[0].idFormaPagamento, idEmpresa),
            await ModelDespesa.countFormaPagamento(formaPagamento[0].idFormaPagamento, idEmpresa)
            ])
            if(countForma[0][0].formaPagamento > 0 || countForma[1][0].formaPagamento > 0){
                return res.status(409).json({
                    message: `Forma de pagamento contém ${countForma[0][0].formaPagamento + countForma[1][0].formaPagamento} registro(s) vinculados`,
                })
            }
            await ModelFormaDePagamento.delete(uuid, idEmpresa)
            return res.status(201).json({
                message: "Forma de pagamento deletada",
            })
        } catch (error) {
            return res.status(500).json({
                message: "erro ao deletar",
            })
        }
    }
}

export default new ControllerFormaDePagamento();