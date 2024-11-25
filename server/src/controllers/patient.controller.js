const PatientController = require('../models/patientModel');

exports.createPatient = async (req, res) => {
    try {
        const { name, age, dateBirth, address, phone } = req.body;

        const createPatient = await PatientController.create({
            name,
            age,
            dateBirth,
            address,
            phone,
        })

        res.status(200).json({ message: 'Paciente creado correctamente.', data: createPatient });
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el paciente.', details: err.message });
    }
}

exports.findAllPatient = async (req, res) => {
    try {
        const findALl = await PatientController.findAll();
        res.json(findALl);
    } catch (err) {
        res.status(500).json({ error: 'Error al buscar los pacientes.', details: err.message });
    }
}

exports.findOnePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const findOne = await PatientController.findByPk(id);
        res.json(findOne);
    }catch (err) {
        res.status(500).json({ error: 'Error al buscar el paciente.', details: err.message });
    }
}

exports.updatePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const { age, dateBirth, address, phone } = req.body;
        const update = await PatientController.update(
            {
                age,
                dateBirth,
                address,
                phone
            },
            { where: { id } }
        )
        res.json({ message: 'Paciente actualizado correctamente.', data: { age, dateBirth, address, phone } });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error al actualizar el paciente.', details: err.message });
    }
}

exports.deletePatient = async  (req, res) => {
    try {
        const { id } = req.params;
        const destroy = await PatientController.destroy({
            where: { id }
        });
        res.json({ message: 'Paciente eliminado correctamente.', data: destroy });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar' });
    }
}