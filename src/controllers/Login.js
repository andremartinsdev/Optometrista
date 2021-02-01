import axios from 'axios'

class ControllerLogin {
    async logar(req, res) {
        const { cpfcnpj, senha } = req.body

        const user = await axios.post("http://bmsltda.com.br/Usuario/Sistemas/validar", {
            cpfcnpj: cpfcnpj,
            senha: senha
        })

        if (user.data.Sucesso) {
            req.session.idEmpresa = user.data.idEmpresa;
            return res.json({ liberado: true })
        }
    }

    async login(req, res) {
       return res.clearCookie('token').json({
            message: "Cookie clear"
        });
    }
}

export default new ControllerLogin();