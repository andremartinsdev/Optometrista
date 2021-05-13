import { v4 } from "uuid"

class OpticaParceiraEntity {
  uuid
  descricao
  constructor(data, uuid) {
    Object.assign(this, data)
    if (!uuid) {
      this.uuid = v4()
    }
  }
}

export default OpticaParceiraEntity