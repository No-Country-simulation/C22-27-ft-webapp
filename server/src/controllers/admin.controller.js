const adminController = require('../models/adminModel');

exports.createAdmin = async (req, res) => {
    try {
        const  { patientId, doctorId } = req.body;

        const admin = await adminController.create({
            patientId,
            doctorId
        })

        res.status(200).json({ message: 'Admin successfully created', data: admin });

    } catch (err) {
        res.status(500).json({ error: 'Error when creating the admin', details: err.message });
    }
}