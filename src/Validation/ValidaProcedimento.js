import validate from 'validate.js'


function ValidaProcedimento(data){
    const constraints = {
        text: {
            presence:{
                allowEmpty: false,
                message: 'O campo descricao não pode ficar em branco.'
            }
        }
    }
    return validate(data, constraints, { fullMessages: false })
}


export default {
    ValidaProcedimento
}