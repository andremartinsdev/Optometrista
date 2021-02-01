import ModelFormaDePagamento from '../models/ModelFormaDePagamento'

class ControllerFormaDePagamento {
    async save(req, res){
        const {data} = req.body
        const idEmpresa = req.idEmpresa
        const uuid = await ModelFormaDePagamento.save({...data, idEmpresa: idEmpresa})
        return res.status(201).json({
            message: "Forma de pagamento cadastrada",
            uuid: uuid
        })
    }

    async read(req, res){
        const idEmpresa = req.idEmpresa
        const result = await ModelFormaDePagamento.read(idEmpresa)

        return res.status(201).json({
            message: "Forma de pagamento pesquisada",
            formasPagamento: result
        })
    }
}

export default new ControllerFormaDePagamento();