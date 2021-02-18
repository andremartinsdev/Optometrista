import validate from 'validate.js'

function ValidaOticaParceira(data){
    const constraints = {
       
        nome: {
            presence: {
                allowEmpty: false,
                message: 'O campo idEmpresa não pode ficar em branco.',
            }
        }
    }
    return validate(data, constraints, { fullMessages: false })
}

export default {
    ValidaOticaParceira
}