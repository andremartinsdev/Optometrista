import ModelOticasParceiras from '../models/ModelOticasParceiras'

class ControllerOticaParceira {
    async save(req, res){
        const {data} = req.body
        console.log(data)
        const idEmpresa = req.idEmpresa
        const uuid = await ModelOticasParceiras.save({...data, idEmpresa: idEmpresa})
        return res.status(201).json({
            message: "Ótica cadastrada",
            uuid: uuid
        })
    }

    async read(req, res){
        const idEmpresa = req.idEmpresa
        const result = await ModelOticasParceiras.read(idEmpresa)

        return res.status(201).json({
            message: "Ótica pesquisada",
            oticaParceira: result
        })
    }
}

export default new ControllerOticaParceira();