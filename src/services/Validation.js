import validate from 'validate.js'

function ValidaPrecricaoOculos(data){
    const constraints = {
        
        idConsulta: {
            presence:{
                allowEmpty: false,
                message: 'O campo idPaciente não pode ficar em branco.'
            }
        },
        data: {
            presence:{
                allowEmpty: false,
                message: 'O campo de Data não pode ficar em branco'
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
        adicao: {
            length: {
                maximum: 30,
                message: 'O campo adicao não pode ter mais de 30 caracteres.'
            },
        },
    }
    return validate(data, constraints, { fullMessages: false })
}


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
        data: {
            presence:{
                allowEmpty: false,
                message: 'O campo de Data não pode ficar em branco'
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
        despesaPaga: {
            presence:{
                allowEmpty: false,
                message: 'O campo de Despesa Paga não pode ficar em branco'
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
            presence: {
                allowEmpty: false,
                message: 'O campo recebido não pode ficar em branco.',
            }

        },
        valorConsulta: {
            presence:{
                allowEmpty: false,
                message: 'O campo valorConsulta não pode ficar em branco.',
            }
        },
        idFormaPagamento: {
            presence:{
                allowEmpty: false,
                message: 'O campo idFormaPagamento não pode ficar em branco.',
            }
        },
        dataPagamento: {
            presence: {
                allowEmpty: false,
                message: 'O campo data não pode ficar em branco.',
            }
        }
    }
    return validate(data, constraints, { fullMessages: false })

}

function ValidaOticaParceira(data){
    const constraints = {
       
        idConsulta: {
            nome: {
                allowEmpty: false,
                message: 'O campo idEmpresa não pode ficar em branco.',
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
    ValidarPaciente,
    ValidarFicha,
    ValidaAgendamento,
    ValidaConsulta,
    ValidaDespesa,
    ValidaFormaDePagamento,
    ValidaOticaParceira,
    ValidaPrecricaoOculos,
    ValidaPrecricaoLente,
    ValidaProcedimento,
    ValidaReceita,
    ValidaAgendamentoUpdate


}

