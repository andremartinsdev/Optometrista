import validate from 'validate.js'

function ValidaPrecricaoLente(data){
    const constraints = {
        idPaciente: {
            presence:{
                allowEmpty: false,
                message: 'O campo idPaciente não pode ficar em branco.'
            }
        },
        idConsulta: {
            presence:{
                allowEmpty: false,
                message: 'O campo idPaciente não pode ficar em branco.'
            }
        },
        
        od_esferico: {
            length: {
                maximum: 10,
                message: 'O campo od_esferico não pode ter mais de 10 caracteres.'
            },
        },
        od_cilindrico: {
            length: {
                maximum: 10,
                message: 'O campo od_cilindrico não pode ter mais de 10 caracteres.'
            },
        },
        od_eixo: {
            length: {
                maximum: 10,
                message: 'O campo od_eixo não pode ter mais de 10 caracteres.'
            },
        },
        od_av: {
            length: {
                maximum: 10,
                message: 'O campo od_av não pode ter mais de 10 caracteres.'
            },
        },
        oe_esferico: {
            length: {
                maximum: 10,
                message: 'O campo oe_esferico não pee ter mais de 10 caracteres.'
            },
        },
        oe_cilindrico: {
            length: {
                maximum: 10,
                message: 'O campo oe_cilindrico não pode ter mais de 10 caracteres.'
            },
        },
        oe_eixo: {
            length: {
                maximum: 10,
                message: 'O campo oe_eixo não pode ter mais de 10 caracteres.'
            },
        },
        oe_av: {
            length: {
                maximum: 10,
                message: 'O campo oe_av não pode ter mais de 10 caracteres.'
            },
        },
       
    }
    return validate(data, constraints, { fullMessages: false })
}


export default {
    ValidaPrecricaoLente
}