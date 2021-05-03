import jwt from 'jsonwebtoken';

const SECRET = "BMSLTDA"


function generateToken(idEmpresa) {
    return jwt.sign({ idEmpresa }, SECRET, {
        expiresIn: 86400
    });
}

function verify(req, res, next) {
    const authHeaders = req.headers.authorization;
    console.log("entroou midware")
    if (!authHeaders) {
        return res.status(401).json({
            message: 'Token não passado.'
        })
    }

    const parts = authHeaders.split(' ');

    if (parts.length != 2) {
        return res.status(401).json({
            message: 'Token em formato inválido.'
        })
    }

    const [scheme, token] = parts;


    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({
            message: 'Token em formato inválido.'
        })
    }

    jwt.verify(token, SECRET, (error, decode) => {
        if (/^jwt expired$/i.test(error)) {
            return res.status(401).json({
                message: 'Token expirado.'
            })
        }

        if (error) {
            return res.status(401).json({
                message: 'Ocorreu um erro ao verificar o token.'
            })
        }

        req.idEmpresa = decode.idEmpresa;

        return next()
    });
}

export { generateToken, verify }