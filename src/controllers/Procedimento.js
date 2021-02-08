import ModelProcedimento from '../models/ModelProcedimento'
import Validation from '../services/Validation'


class ControllerProcedimento {
    async save(req, res) {
        try {
            const { data } = req.body
            if (Validation.ValidaProcedimento(data)) {
                return res.status(422).json({
                    message: 'Erro na validação dos dados do Procedimento',
                })
            } else {
                const uuid = await ModelProcedimento.save({ ...data, idEmpresa: req.idEmpresa })
                return res.status(201).json({
                    message: 'Procedimento Salvo',
                    uuid: uuid
                })
            }
        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao Registrar Procedimento',
            })
        }
    }

    async readAll(req, res) {
        try {
            const result = await ModelProcedimento.readAll(req.idEmpresa)
            return res.status(201).json({
                procedimento: result
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao Pesquisar Procedimento',
            })
        }
    }

    async read(req, res) {
        try {
            const uuid = String(req.params.uuid)
            const result = await ModelProcedimento.read(uuid, req.idEmpresa)
            return res.status(201).json({
                procedimento: result
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao Pesquisar Procedimento #2',
            })
        }
    }

    async update(req, res) {
        try {
            const { data } = req.body
            if (Validation.ValidaProcedimento(data)) {
                return res.status(422).json({
                    message: 'Erro na validação dos dados do Procedimento',
                })
            } else {
                const uuid = String(req.params.uuid)
                await ModelProcedimento.update(data, uuid)
                return res.status(201).json({
                    message: 'Procedimento atualizada com sucesso.'
                })
            }
        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao Atualizar Procedimento',
            })
        }
    }


    async delete(req, res) {
        try {
            const uuid = String(req.params.uuid)
            const result = await ModelProcedimento.delete(uuid, req.idEmpresa)
            return res.status(201).json({
                result
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao Deletar Procedimento',
            })
        }
    }
}


export default new ControllerProcedimento();
