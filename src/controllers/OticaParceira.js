import OpticaParceiraEntity from '../entities/OpticaParceira.js'
import ModelAgenda from '../models/ModelAgenda.js'
import ModelOticasParceiras from '../models/ModelOticasParceiras.js'
import Validation from '../Validation/ValidaOticaParceira.js'


class ControllerOticaParceira {
    async save(req, res) {
        try {
            const opticaParceira = new OpticaParceiraEntity(req.body)
            if (Validation.ValidaOticaParceira(opticaParceira)) {
                return res.status(422).json({
                    message: "Erro de validação ao registrar Ótica Parceira",
                })
            }
            const idEmpresa = req.idEmpresa
            await ModelOticasParceiras.save({ ...opticaParceira, idEmpresa: idEmpresa })
            return res.status(201).json({
                message: "Ótica cadastrada",
                uuid: opticaParceira.uuid
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: "Erro ao cadastrar ótica",
            })
        }
    }

    async update(req, res) {
        try {
            const opticaParceira = new OpticaParceiraEntity(req.body)
            const uuid = String(req.params.uuid)
            const idEmpresa = String(req.idEmpresa)
            await ModelOticasParceiras.update(opticaParceira, uuid, idEmpresa)
            return res.status(201).json({
                result
            })
        } catch (error) {
            return res.status(500).json({
                message: "erro ao realizar atualização"
            })
        }
    }

    async findById(req, res) {
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

    async delete(req, res) {
        try {
            const uuid = req.params.uuid
            const idEmpresa = req.idEmpresa
            const oticaParceira = await ModelOticasParceiras.findById(idEmpresa, uuid)

            const countOticas = await Promise.all([
                await ModelAgenda.countOticaParceira(oticaParceira[0].idOticaParceira, idEmpresa),
            ])
   
            if (countOticas[0][0].oticas > 0) {
                return res.status(409).json({
                    message: `Óticas Parceiras contém ${countOticas[0][0].oticas} registro(s) vinculados.`,
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

    async read(req, res) {
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