import { v4 } from 'uuid';

class AgendaEntity {
  uuid;
  idPaciente;
  idEmpresa;
  idFormaPagamento;
  idOticaParceira;
  titulo;
  data;
  dataVencimento;
  horario;
  idProcedimento;
  valorConsulta;
  idConsulta;
  dataPagamento;
  atendido;
  recebido;
  observacao;

  constructor(body = {}, uuid) {
    Object.assign(this, body);
    if (!uuid) {
      this.uuid = v4();
    }
  }
}

export default AgendaEntity;
