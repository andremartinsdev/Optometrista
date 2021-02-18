import validate from 'validate.js'

function ValidaConsulta(data) {
    const constraints = {
      
        data: {
            presence:{
                allowEmpty: false,
                message: 'O campo de Data não pode ficar em branco'
            }
        }
        
    }
    return validate(data, constraints, { fullMessages: false })

}

export default {
    ValidaConsulta
}