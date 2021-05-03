import { v4 } from "uuid"

class PacienteEntity {
  uuid
  nomePaciente
  dataNascimento
  cpf
  rg
  email
  endereco
  cidade
  estado
  telefone

  constructor(data, uuid) {
    Object.assign(this, data)
    if(!uuid){
      this.uuid = v4()
    }
  }
}

export default PacienteEntity;