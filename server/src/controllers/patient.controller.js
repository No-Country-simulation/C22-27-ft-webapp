const PatientController = require('../models/patientModel');

exports.createPatient = async (req, res) => {
    try {
        const { name, rol, age, email, password,  dateBirth, address, phone } = req.body;

        const createPatient = await PatientController.create({
            name,
            rol,
            age,
            email,
            password,
            dateBirth,
            address,
            phone,
        })

        res.status(200).json({ message: 'Patient successfully created', data: createPatient });
    } catch (err) {
        res.status(500).json({ error: 'Error when creating the patient', details: err.message });
    }
}

exports.findAllPatient = async (req, res) => {
    try {
        const findALl = await PatientController.findAll();
        res.json(findALl);
    } catch (err) {
        res.status(500).json({ error: 'Error when searching for patients', details: err.message });
    }
}

exports.findOnePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const findOne = await PatientController.findByPk(id);

        if (!findOne) {
            res.json({ message: 'Patient not found' });
        }

        res.json({ message: 'Patient found',data:findOne });
    }catch (err) {
        res.status(500).json({ error: 'Error when searching for the patient.', details: err.message });
    }
}

exports.updatePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const search = await PatientController.findByPk(id);
        const { name, rol, age, email, password, dateBirth, address, phone } = req.body;

        if (!search) {
            res.json({ message: 'Patient not found' });
        }

        const update = await PatientController.update(
            {
                name,
                rol,
                age,
                email,
                password,
                dateBirth,
                address,
                phone
            },
            { where: { id } }
        )
        res.json({ message: 'Patient correctly updated.', data: { name, rol, age, email, password, dateBirth, address, phone } });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error updating the patient', details: err.message });
    }
}

exports.deletePatient = async  (req, res) => {
    try {
        const { id } = req.params;
        const search = await PatientController.findByPk(id);

        if (!search) {
            res.json({ message: 'Patient not found' });
        }

        await PatientController.destroy({
            where: { id }
        });
        res.json({ message: 'Patient delete correctly' });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting patient' });
    }
}