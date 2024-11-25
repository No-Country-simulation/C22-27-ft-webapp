const User = require('../models/users.js'); 
const { createHash } = require("../utils/hashPassword.js");

// Crear una notificación
exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const hashpass = createHash(password);

    // Crear usuario
    const user = await User.create({ name, email, hashpass, role});

    res.status(201).json({ message: 'Usuario creado con éxito.', user });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario.', details: error.message });
  }
};

