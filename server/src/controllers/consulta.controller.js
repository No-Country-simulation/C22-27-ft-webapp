const ConsultationModel = require('../models/consultaModel');
const PatientModel = require('../models/patientModel');
const DoctorModel = require('../models/doctorModel');

exports.createConsultation = async (req, res) => {
        try {
            const { date, status, desciption, patientId, doctorId } = req.body;

            const createConsultation = await ConsultationModel.create({
                date,
                status,
                desciption,
                patientId,
                doctorId
            });
            res.json({ message: 'Consulta creada correctamente.', data: createConsultation });
        } catch (err) {
            res.status(500).send(err);
        }
}

exports.findAllConsultations = async  (req, res) => {
    try {
        const allConsultations = await ConsultationModel.findAll({
            include: [
                {
                    model: PatientModel
                },
                {
                    model: DoctorModel
                }
            ],
            attributes: { exclude: ['patientId', 'doctorId'] }
        });
        res.json(allConsultations);
    } catch (err) {
        res.status(500).json({ error: 'Error al buscar las consultas.', details: err.message });
    }
}

exports.findOneConsultation = async (req, res) => {
    try {
        const { id } = req.params;
        const findOne = await ConsultationModel.findByPk(id, {
            include: [
                {
                    model: PatientModel
                },
                {
                    model: DoctorModel
                }
            ],
            attributes: { exclude: ['patientId', 'doctorId'] }
        });

        if (!findOne) {
            res.json({ message: 'Consulta no encontrada.' });
        }

        res.json(findOne);
    } catch (err) {
        res.status(500).json({ error: 'Error al buscar la consulta.', details: err.message });
    }
}

exports.updateConsultation = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, desciption } = req.body;
        const search = await ConsultationModel.findByPk(id);

        if (!search) {
            res.json({ message: 'Consulta no encontrada.' });
        }

        const update = await ConsultationModel.update(
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
        const { id } = req.params;
        const search = await ConsultationModel.findByPk(id);

        if (!search) {
            res.json({ message: 'Consulta no encontrada.' });
        }

        await ConsultationModel.destroy({ where: { id } });

        res.json({ message: 'Consulta eliminada correctamente.' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar la consulta.', details: err.message });
    }
}