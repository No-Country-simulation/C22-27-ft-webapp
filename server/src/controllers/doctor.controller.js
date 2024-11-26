const doctorModel = require('../models/doctorModel');

exports.createDoctor = async (req, res) => {
    try {
        const { name, rol, age, email, password, dateBirth, address, phone, specialty } = req.body;

        const create = await doctorModel.create({
            name,
            rol,
            age,
            email,
            password,
            dateBirth,
            address,
            phone,
            specialty
        })
        res.json({ message: 'Doctor creado correctamente.', data: create });
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el doctor.', details: err.message });
    }
}

exports.findAllDoctors = async (req, res) => {
    try {
        const allDoctors = await  doctorModel.findAll();
        res.json({ message: 'Todos los doctores.', data: allDoctors });
    } catch (err) {
        res.status(500).json({ error: 'Error al buscar los doctores.', details: err.message });
    }
}

exports.findOneDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const findOne = await doctorModel.findByPk(id);

        if (!findOne) {
            res.json({ message: 'Doctor no encontrado.' });
        }

        res.json({ message: 'Doctor found',data:findOne });
    } catch (err) {
        res.status(500).json({ error: 'Error al buscar el doctor.', details: err.message });
    }
}

exports.updateDoctor = async (req, res) => {
    try {
        const { id } = req.params;

        const search = await doctorModel.findByPk(id);
        if (!search) {
            res.json({ message: 'Doctor no encontrado.' });
        }

        const { name, rol, age, email, password, dateBirth, address, phone, specialty} = req.body;

        await doctorModel.update(
            {
                name,
                rol,
                age,
                email,
                password,
                dateBirth,
                address,
                phone,
                specialty
            },
            { where: { id } }
        )
        res.json({ message: 'Doctor actualizado correctamente.', data: { name, rol, age, email, password, dateBirth, address, phone, specialty } });
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el doctor.', details: err.message });
    }
}

exports.deleteDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const search = await doctorModel.findByPk(id);
         if (!search) {
             res.json({ message: 'Doctor no encontrado.' });
         }

        await doctorModel.destroy({ where: { id } });

        res.json({ message: 'Doctor eliminado correctamente.' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el doctor.', details: err.message });
    }
}