import ModelOticasParceiras from '../models/ModelOticasParceiras'
import Validation from '../Validation/ValidaOticaParceira'


class ControllerOticaParceira {
    async save(req, res){
        try {
            const { nome } = req.body
            if(Validation.ValidaOticaParceira({nome})){
                return res.status(422).json({
                    message: "Erro de validação ao registrar Ótica Parceira",
                })
            }else{
                const idEmpresa = req.idEmpresa
                const uuid = await ModelOticasParceiras.save({nome, idEmpresa: idEmpresa})
                return res.status(201).json({
                    message: "Ótica cadastrada",
                    uuid: uuid
                })
            }
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao cadastrar ótica",
            })
        }
    }

    async read(req, res){
        try {
            const idEmpresa = req.idEmpresa
            const result = await ModelOticasParceiras.read(idEmpresa)
            return res.status(201).json({
                message: "Ótica pesquisada",
                oticaParceira: result
            })
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao pesquisar",
            })
        }
    }
}

export default new ControllerOticaParceira();