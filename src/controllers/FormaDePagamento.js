import ModelFormaDePagamento from '../models/ModelFormaDePagamento'
import Validation from '../Validation/ValidaFormaPagamento'


class ControllerFormaDePagamento {
    async save(req, res){
        try {
            const { descricao } = req.body
            if(Validation.ValidaFormaDePagamento({descricao})){
                return res.status(422).json({
                    message: "Erro na validação dos dados da Forma de pagamento",
                })
            }else{
                const idEmpresa = req.idEmpresa
                const uuid = await ModelFormaDePagamento.save({descricao, idEmpresa: idEmpresa})
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

    async read(req, res){
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
}

export default new ControllerFormaDePagamento();