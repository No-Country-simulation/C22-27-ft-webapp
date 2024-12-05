const adminController = require('../models/adminModel');
const doctorModel = require("../models/doctorModel");
const PatientController = require("../models/patientModel");
const { createHash } = require('../utils/hashPassword');

exports.createAdmin = async (req, res) => {
    try {
        const  { password, rol, ...rest } = req.body;

        const passHashed = createHash(password);

        const existAdmin = await adminController.findOne({ where: { password: passHashed } });

        if (!existAdmin) {
            return res.json({ message: 'Admin already exists' });
        }

        const admin = await adminController.create({
            password: passHashed,
            rol: 'admin',
            ...rest
        })

        res.status(200).json({ message: 'Admin successfully created', data: admin });

    } catch (err) {
        res.status(500).json({ error: 'Error when creating the admin', details: err.message });
    }
}

exports.findAllAdmins = async (req, res) => {
    try {
        const admins = await adminController.findAll();
        res.json(admins);
    } catch (err) {
        res.status(500).json({ error: 'Error when getting the admins', details: err.message });
    }
}

exports.findOneAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await adminController.findByPk(id);
        res.json(admin);
    } catch (err) {
        res.status(500).json({ error: 'Error when getting the admin', details: err.message });
    }
}

exports.updateAdmin = async (req, res) => {
    try {
        const { id  } = req.params;
        const { ...rest } = req.body;

        const findOne = await adminController.findByPk(id);

        if (!findOne){
            return res.json({ message: 'Admin not found' });
        }

        await adminController.update(
            { ...rest },
            { where: { id } }
        );
        res.json({ message: 'Admin successfully updated', data: { ...rest } });

    } catch (err) {
        res.status(500).json({ error: 'Error when updating the admin', details: err.message });
    }
}

exports.deleteAdmin = async (req, res) => {
    try {
        const { id } = req.params;

        const findOne = await adminController.findByPk(id);

        if (!findOne){
            return res.json({ message: 'Admin not found' });
        }

        await adminController.destroy({ where: { id } });
        res.json({ message: 'Admin successfully deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Error when deleting the admin', details: err.message });
    }
}


// Delete and found Doctor

exports.findAllDoctors = async (req, res) => {
    try {
        const allDoctors = await  doctorModel.findAll();
        return res.json({ message: 'Todos los doctores.', data: allDoctors });
    } catch (err) {
        return res.status(500).json({ error: 'Error al buscar los doctores.', details: err.message });
    }
}

exports.findOneDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const findOne = await doctorModel.findByPk(id);

        if (!findOne) {
            return res.json({ message: 'Doctor no encontrado.' });
        }

        return res.json({ message: 'Doctor found',data:findOne });
    } catch (err) {
        return res.status(500).json({ error: 'Error al buscar el doctor.', details: err.message });
    }
}


exports.deleteDoctor = async (req, res) => {
    try {
        const { id } = req.params;

        const search = await doctorModel.findByPk(id);
        if (!search) {
            return res.json({ message: 'Doctor no encontrado.' });
        }

        await doctorModel.destroy({ where: { id } });

        return res.json({ message: 'Doctor eliminado correctamente.' });
    } catch (err) {
        return res.status(500).json({ error: 'Error al eliminar el doctor.', details: err.message });
    }
}

// Delete and found Patient

exports.findAllPatient = async (req, res) => {
    try {
        const findALl = await PatientController.findAll();
        return res.json(findALl);
    } catch (err) {
        return res.status(500).json({ error: 'Error when searching for patients', details: err.message });
    }
}

exports.findOnePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const search = await PatientController.findByPk(id);

        if (!search) {
            return res.json({ message: 'Patient not found' });
        }

        return res.json({ message: 'Patient found',data:findOne });
    }catch (err) {
        return res.status(500).json({ error: 'Error when searching for the patient.', details: err.message });
    }
}


exports.deletePatient = async  (req, res) => {
    try {
        const { id } = req.params;
        const search = await PatientController.findByPk(id);

        if (!search) {
            return res.json({ message: 'Patient not found' });
        }

        await PatientController.destroy({
            where: { id }
        });
        return res.json({ message: 'Patient delete correctly' });
    } catch (err) {
        return  res.status(500).json({ error: 'Error deleting patient' });
    }
}