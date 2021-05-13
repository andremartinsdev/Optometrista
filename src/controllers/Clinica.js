import ModelClinica from '../models/ModelClinica.js'

class ControllerClinica {
    async save(req, res) {
        const { nomeClinica, cnpjcpf, telefone, endereco, bairro, cidade, numero, cep, logo } = req.body
        const result = await ModelClinica.save({ nomeClinica, idEmpresa: req.idEmpresa, cnpjcpf, telefone, endereco, bairro, cidade, numero, cep, logo })
        return res.status(201).json({
            message: "registro salvo",
            result
        })
    }

    async read(req, res) {
        const result = await ModelClinica.read(req.idEmpresa)
        return res.status(201).json({
            result
        })
    }

    async update(req, res) {
        const uuid = req.params.uuid
        const { nomeClinica, cnpjcpf, telefone, endereco, bairro, cidade, numero, cep, logo } = req.body
        console.log(req.body, uuid)
        const result = await ModelClinica.update(uuid, req.idEmpresa, { nomeClinica, cnpjcpf, telefone, endereco, bairro, cidade, numero, cep, logo })
        return res.status(201).json({
            result
        })
    }
}

export default new ControllerClinica();