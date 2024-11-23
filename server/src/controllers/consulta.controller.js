const db = require('../db/DB_connection');

class ConsultaController {
    constructor() {}

    async create(req, res) {
        try {
            res.json({msg: 'Create Consulta'});
        } catch (err) {
            res.status(500).send(err);
        }
    }

    findAll(req, res) {
        res.json({msg: 'Find all Consulta'});
    }

    findOne(req, res) {
        const { id } = req.params;
        res.json({msg: 'Find one Consulta by id'});
    }

    update(req, res) {
        res.json({msg: 'Update Consulta'});
    }

    remove(req, res) {
        res.json({msg: 'Remove Consulta'});
    }
}

module.exports = new ConsultaController();