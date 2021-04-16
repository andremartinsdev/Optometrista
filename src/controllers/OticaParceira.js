import ModelOticasParceiras from '../models/ModelOticasParceiras'
import ModelDespesa from '../models/ModelDespesa'
import ModelAgenda from '../models/ModelAgenda'
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

    async findById(req,res){
        try {
            const uuid = req.params.uuid
            const idEmpresa = req.idEmpresa
            const result = await ModelOticasParceiras.findById(idEmpresa, uuid)
            return res.status(201).json({
                result
            })
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao pesquisar"
            })
        }
    }

    async update(req, res){
        try {
            const { nome } = req.body
            const uuid = req.params.uuid
            const idEmpresa = req.idEmpresa
            const result = await ModelOticasParceiras.update({ nome }, uuid, idEmpresa)
            return res.status(201).json({
                result
            })
        } catch (error) {
            return res.status(500).json({
                message: "erro ao realizar atualização"
            })
        }
    }

    async delete(req, res) {
        try {
            const uuid = req.params.uuid
            const idEmpresa = req.idEmpresa
            const oticaParceira = await ModelOticasParceiras.findById(idEmpresa, uuid)
           
            const countOticas = await Promise.all([
               await ModelAgenda.countOticaParceira(oticaParceira[0].idOticaParceira, idEmpresa),
            ])
console.log(countOticas)
            // const countForma = await Promise.all([await ModelAgenda.countFormaPagamento(formaPagamento[0].idFormaPagamento, idEmpresa),
            // await ModelDespesa.countFormaPagamento(oticaParceira[0].idOticaParceira, idEmpresa)
            // ])
             if(countOticas[0][0].oticas > 0 ){
                 return res.status(409).json({
                     message: `Óticas Parceiras contém ${countOticas[0][0].oticas} registro(s) vinculados`,
                 })
             }
            await ModelOticasParceiras.delete(uuid, idEmpresa)
            return res.status(201).json({
                message: "Forma de pagamento deletada",
            })
        } catch (error) {
            return res.status(500).json({
                message: "erro ao deletar",
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