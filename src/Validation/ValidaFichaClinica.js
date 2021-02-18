import validate from 'validate.js'

function ValidarFicha(data) {
    const constraints = {
       
        idConsulta: {
            presence: {
                allowEmpty: false,
                message: 'O campo idEmpresa não pode ficar em branco.',
            }
        },
        idPaciente: {
            presence: {
                allowEmpty: false,
                message: 'O campo idEmpresa não pode ficar em branco.',
            }
        }
    }
    return validate(data, constraints, { fullMessages: false })
}


function ValidarFichaJson(data) {
    const constraints = {
       
        json_fichaClinica: {
            length: {
                maximum: 2000,
                message: 'O campo Nome não pode ter mais de 100 caracteres.'
            },
        }
        
    }
    return validate(data, constraints, { fullMessages: false })
}

export default {
    ValidarFicha,
    ValidarFichaJson
}