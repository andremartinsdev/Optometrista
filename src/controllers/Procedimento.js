import ModelProcedimento from '../models/ModelProcedimento'

class ControllerProcedimento {
    async save(req, res){
        const {data} = req.body
        const uuid = await ModelProcedimento.save({...data, idEmpresa:req.idEmpresa})
        return res.status(201).json({
            message: 'Procedimento Salvo',
            uuid: uuid
        })
    }

    async readAll(req, res){
        const result = await ModelProcedimento.readAll(req.idEmpresa)
        return res.status(201).json({
            procedimento: result
        })
    }

    async read(req, res){
        const uuid = String(req.params.uuid)
        const result = await ModelProcedimento.read(uuid, req.idEmpresa)
        return res.status(201).json({
            procedimento: result
        })
    }

    async update(req, res) {
        const { data } = req.body
        const uuid = String(req.params.uuid)
        await ModelProcedimento.update(data, uuid)
    
        return res.status(201).json({
          message: 'Procedimento atualizada com sucesso.'
        })
      }


    async delete(req, res){
        const uuid = String(req.params.uuid)
        const result = await ModelProcedimento.delete(uuid, req.idEmpresa)
        return res.status(201).json({
            result
        })
    }
}


export default new ControllerProcedimento();
