import validate from 'validate.js'

function ValidarPaciente(data) {
    const constraints = {
        nomePaciente: {
            presence: {
                allowEmpty: false,
                message: 'O campo Nome não pode ficar em branco.',
            },
            length: {
                maximum: 50,
                message: 'O campo Nome não pode ter mais de 50 caracteres.'
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


export default ValidarPaciente