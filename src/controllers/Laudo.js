import ModelLaudo from '../models/ModelLaudo.js'


class ControllerLaudo {
    async save(req, res) {
        const { data, idPaciente, idConsulta, od_perto_sc, od_perto_cc, od_longe_sc, od_longe_cc, oe_perto_sc, oe_perto_cc, oe_longe_sc, oe_longe_cc } = req.body
       console.log(idPaciente)
        const result = await ModelLaudo.save({ data, idPaciente, idConsulta, idEmpresa: req.idEmpresa,  od_perto_sc, od_perto_cc, od_longe_sc, od_longe_cc, oe_perto_sc, oe_perto_cc, oe_longe_sc, oe_longe_cc })
        return res.status(201).json({
            result
        })
    }

    async read(req, res) {
        const dataInicial = req.params.dataInicial
        const dataFinal = req.params.dataFinal
        const idPaciente = req.params.idPaciente
        const { page = 1, limit = 5 } = req.query;
        const idEmpresa =  req.idEmpresa
        const result = await ModelLaudo.read(idPaciente, idEmpresa , limit, page, dataInicial, dataFinal)

        return res.status(201).json({
            result
        })
    }
}

export default new ControllerLaudo();