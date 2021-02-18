import validate from 'validate.js'

function ValidaDespesa(data) {
    const constraints = {
        descricaoDespesa: {
            presence:{
                allowEmpty: false,
                message: 'O campo Descrição não pode ficar em branco.'
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
                message: 'O campo de Titulo não pode ficar em branco'
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
    ValidaDespesa
}