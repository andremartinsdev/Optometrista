import validate from 'validate.js'

function ValidaFormaDePagamento(data){
    const constraints = {
        descricao: {
            presence:{
                allowEmpty: false,
                message: 'O campo descricao não pode ficar em branco.'
            }
        }
    }
    return validate(data, constraints, { fullMessages: false })
}



export default {
    ValidaFormaDePagamento
}