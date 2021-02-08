import axios from 'axios'

class ControllerLogin {
    async logar(req, res) {
        try {
            const { cpfcnpj, senha } = req.body
            const user = await axios.post("http://bmsltda.com.br/Usuario/Sistemas/validar", {
                cpfcnpj: cpfcnpj,
                senha: senha
            })
    
            if (user.data.Sucesso) {
                req.session.idEmpresa = user.data.idEmpresa;
                return res.status(201).json({ liberado: true })
            }
        } catch (error) {
            req.session.idEmpresa = user.data.idEmpresa;
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