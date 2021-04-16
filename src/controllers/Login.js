import axios from 'axios'
import { generateToken } from '../Middleware/Authentication'
class ControllerLogin {
    async logar(req, res) {
        try {
            const { cpfcnpj, senha } = req.body
            const user = await axios.post("http://bmsltda.com.br/Usuario/Sistemas/validar", {
                cpfcnpj: cpfcnpj,
                senha: senha
            })

            if (user.data.Sucesso) {
                const token = generateToken(user.data.idEmpresa);
                console.log("entrou login")
                return res.status(201).json({
                    token: token
                })
            }
        } catch (error) {
            return res.status(500).json({ liberado: false })
        }
    }

    async login(req, res) {
        try {
            return res.status(201).clearCookie('token').json({
                message: "Cookie clear"
            });
        } catch (error) {
            return res.staus(500).json({
                message: "Cookie clear ERROR"
            });
        }
    }

}

export default new ControllerLogin();