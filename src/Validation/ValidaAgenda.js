import validate from 'validate.js'

function ValidaAgendamento(data) {
    const constraints = {

        idPaciente: {
            presence: {
                allowEmpty: false,
                message: 'O campo idPaciente não pode ficar em branco.',
            }

        },
        procedimento: {
            presence:{
                allowEmpty: false,
                message: 'O campo Procedimento não pode ficar em branco.',
            }
        },
        titulo: {
            presence:{
                allowEmpty: false,
                message: 'O campo titulo não pode ficar em branco.',
            }
        },
        data: {
            presence: {
                allowEmpty: false,
                message: 'O campo data não pode ficar em branco.',
            }
        }
    }
    return validate(data, constraints, { fullMessages: false })

}

function ValidaAgendamentoUpdate(data) {
    const constraints = {

        recebido: {
            length: {
                maximum: 5,
                message: 'O campo Nome não pode ter mais de 100 caracteres.'
            },
            
        },
        valorConsulta: {
            length: {
                maximum: 10,
                message: 'O campo Nome não pode ter mais de 10 caracteres.'
            },
           
        },
        idFormaPagamento: {
            length: {
                maximum: 5,
                message: 'O campo Nome não pode ter mais de 100 caracteres.'
            },
            
        },
        dataPagamento: {
            length: {
                maximum: 10,
                message: 'O campo Nome não pode ter mais de 100 caracteres.'
            },
        
        }
    }
    return validate(data, constraints, { fullMessages: false })

}

function ValidaUpdateIdConsultAtendido(data){
    const constraints = {
        idConsulta: {
            presence: {
                allowEmpty: false,
                message: 'O campo data não pode ficar em branco.',
            }
        }

    }

    return validate(data, constraints, { fullMessages: false })

}

function ValidaUpdateIdConsultAtendidoDtVencimento(data){
    const constraints = {
        idConsulta: {
            presence: {
                allowEmpty: false,
                message: 'O campo data não pode ficar em branco.',
            }
        }

    }

    return validate(data, constraints, { fullMessages: false })

}






export default {
    ValidaAgendamento,
    ValidaAgendamentoUpdate,
    ValidaUpdateIdConsultAtendido,
    ValidaUpdateIdConsultAtendidoDtVencimento
}