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



function ValidarFicha(data) {
    const constraints = {
       
        idConsulta: {
            presence: {
                allowEmpty: false,
                message: 'O campo idEmpresa não pode ficar em branco.',
            }
        }
    }
    return validate(data, constraints, { fullMessages: false })
}
function ValidarPaciente(data) {
    const constraints = {

        nomePaciente: {
            presence: {
                allowEmpty: false,
                message: 'O campo Nome não pode ficar em branco.',
            },
            length: {
                maximum: 50,
                message: 'O campo Nome não pode ter mais de 100 caracteres.'
            },
            length: {
                minimum: 5,
                message: 'O campo Nome não pode ter menus de 5 caracteres.'
            }
        },
        email: {
            length: {
                maximum: 50,
                message: 'O campo de Email não pode ter mais de 50 caracteres'
            }
        },
        telefone: {
            length: {
                maximum: 30,
                message: 'O campo de Telefone não pode ter mais de 30 caracteres'
            }
        },
        cidade: {
            length: {
                maximum: 50,
                message: 'O campo cidade não pode ter mais de 50 caracteres'
            }
        },
        estado: {
            length: {
                maximum: 50,
                message: 'O campo estado não pode ter mais de 50 caracteres'
            }
        },
        dataNascimento: {
            length: {
                maximum: 30,
                message: 'O campo Data de Nascimento não pode ter mais de 30 caracteres'
            }
        },
        rg: {
            length: {
                maximum: 30,
                message: 'O campo rg não pode ter mais de 30 caracteres'
            }
        },
        cpf: {
            length: {
                maximum: 30,
                message: 'O campo cpf não pode ter mais de 30 caracteres'
            }
        }

    }
    return validate(data, constraints, { fullMessages: false })

}

export default {
    
    ValidaAgendamentoUpdate


}

