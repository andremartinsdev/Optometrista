import ModelDespesa from '../models/ModelDespesa'


class ControllerDespesa {
    async save(req,res){
        const { data } = req.body
        const uuid = await ModelDespesa.save({...data, idEmpresa: req.idEmpresa})
        return res.status(201).json({
           result: uuid 
        })
    }

    async readAll(req, res){
        const result = await ModelDespesa.readAll(req.idEmpresa)
        return res.status(201).json({
            despesas: result
        })
    }


    async read(req, res){
        const uuid = req.params.uuid
        const result = await ModelDespesa.read(req.idEmpresa, uuid)
        return res.status(201).json({
            despesa: result
        })
    }


    async delete(req, res){
        const uuid = req.params.uuid
        const result = await ModelDespesa.delete(req.idEmpresa, uuid)
        return res.status(201).json({
            result
        })
    }

    async update(req, res){
        const uuid = req.params.uuid
        const { data } = req.body
        const result = await ModelDespesa.update(data, req.idEmpresa, uuid)
        return res.status(201).json({
            result
        })
    }

    async readDate(req, res){
        const dataInicial = req.params.dataInicial
        const dataFinal = req.params.dataFinal
        const result = await ModelDespesa.readDate(req.idEmpresa, dataInicial, dataFinal)

        return res.status(201).json({
            result
        })
    }

    async readDatePagamento(req, res){
        const dataInicial = req.params.dataInicial
        const dataFinal = req.params.dataFinal
        const idFormaPagamento = req.params.idFormaPagamento

        const result = await ModelDespesa.readDatePagamento(req.idEmpresa, dataInicial, dataFinal, idFormaPagamento)

        res.status(201).json({
            result
        })
    }
}


export default new ControllerDespesa();