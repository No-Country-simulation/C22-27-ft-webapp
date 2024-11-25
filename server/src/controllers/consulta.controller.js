const ConsultationController = require('../models/consultaModel');
const PatientController = require('../models/patientModel');

exports.createConsultation = async (req, res) => {
        try {
            const { date, status, desciption, patientId } = req.body;

            const createConsultation = await ConsultationController.create({
                date,
                status,
                desciption
            })
            res.json({ message: 'Consulta creada correctamente.', data: createConsultation });
        } catch (err) {
            res.status(500).send(err);
        }
}

exports.findAllConsultations = async  (req, res) => {
    try {
        const allConsultations = await ConsultationController.findAll({
            include: [
                {
                    model: PatientController,
                    attributes: ['id']
                }
            ]
        });
        res.json(allConsultations);
    } catch (err) {
        res.status(500).json({ error: 'Error al buscar las consultas.', details: err.message });
    }
}

exports.findOneConsultation = async (req, res) => {
    try {
        const { id } = req.params;
        const findOne = await ConsultationController.findByPk(id);
        res.json(findOne);
    } catch (err) {
        res.status(500).json({ error: 'Error al buscar la consulta.', details: err.message });
    }
}

exports.updateConsultation = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, desciption } = req.body;

        const update = await ConsultationController.update(
            {
                status,
                desciption
            },
            { where: { id } }
        )
        res.json({ message: 'Consulta actualizada correctamente.', data: { status, desciption } });
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar la consulta.', details: err.message });
    }
}

exports.deleteConsultation = async (req, res) => {
    try {
        
    } catch (err) {}
}