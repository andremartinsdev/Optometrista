import validate from 'validate.js'

function ValidaReceita(data) {
    const constraints = {
        descricaoReceita: {
            presence:{
                allowEmpty: false,
                message: 'O campo descricaoReceita não pode ficar em branco.'
            }
        },
        data: {
            presence:{
                allowEmpty: false,
                message: 'O campo de Data não pode ficar em branco'
            }
        },
        valor: {
            presence:{
                allowEmpty: false,
                message: 'O campo de valor não pode ficar em branco'
            }
        },
        idFormaPagamento: {
            presence:{
                allowEmpty: false,
                message: 'O campo de idFormaPagamento não pode ficar em branco'
            }
        }
    }
    return validate(data, constraints, { fullMessages: false })

}

export default {
    ValidaReceita
}
