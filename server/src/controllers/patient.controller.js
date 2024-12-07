const PatientController = require('../models/patientModel.js');
const { createHash } = require('../utils/hashPassword.js');

exports.createPatient = async (req, res) => {
    try {
        const { password, ...rest } = req.body;

        const passHashed = createHash(password);

        const createPatient = await PatientController.create({
            password: passHashed,
            ...rest,
           
        })

        return res.status(200).json({ message: 'Patient successfully created', data: createPatient });
    } catch (err) {
        return res.status(500).json({ error: 'Error when creating the patient', details: err.message });
    }
}

exports.updatePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const search = await PatientController.findByPk(id);
        const { ...rest } = req.body;

        if (!search) {
            return res.json({ message: 'Patient not found' });
        }

        const update = await PatientController.update(
            {
                ...rest
            },
            { where: { id } }
        )
        return res.json({ message: 'Patient correctly updated.', data: { name, rol, age, email, password, dateBirth, address, phone } });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Error updating the patient', details: err.message });
    }
}
