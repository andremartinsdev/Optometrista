import ModelFormaDePagamento from '../models/ModelFormaDePagamento'
import Validation from '../services/Validation'


class ControllerFormaDePagamento {
    async save(req, res){
        try {
            const {data} = req.body
            if(Validation.ValidaFormaDePagamento(data)){
                return res.status(422).json({
                    message: "Erro na validação dos dados da Forma de pagamento",
                })
            }else{
                const idEmpresa = req.idEmpresa
                const uuid = await ModelFormaDePagamento.save({...data, idEmpresa: idEmpresa})
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