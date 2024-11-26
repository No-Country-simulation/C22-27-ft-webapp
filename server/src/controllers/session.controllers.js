const { request, response } = require("express");
const { createHash, isValidPassword } = require("../utils/hashPassword.js");
const { createToken,  } = require("../utils/jw.js");
const User = require('../models/users.js'); 

const register = async (req = request, res = response) => {
  try {
    const { email, password, name } = req.body;

    // Verificar si ya existe un usuario con el email proporcionado
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ status: "error", msg: "Email already registered" });
    }

    // Hashear la contraseña antes de guardar
    const hashedPassword = createHash(password);

    // Crear el usuario en la base de datos
    const newUser = await User.create({
      email,
      password: hashedPassword,
      name,
    });

    res.status(201).json({ status: "ok", msg: "User created", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", msg: "Internal server error" });
  }
};


const login = async (req = request, res = response) => {
  try {
    const { email, password } = req.body;
    // Buscar el usuario en la base de datos por email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ status: "error", msg: "User not found" });
    }
    // Validar la contraseña
    const passwordMatch = isValidPassword(user.hashpass, password);
    if (!passwordMatch) {
      return res.status(401).json({ status: "error", msg: "Incorrect password" });
    }
    // Generar el token
    const token = createToken(user);

    // Configurar la cookie con el token
    res.cookie("token", token, { httpOnly: true });
    
    // Responder con éxito
    return res.status(200).json({
      status: "ok",
      msg: "Login successful",
      payload: { id: user.id, email: user.email, name: user.name },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "error", msg: "Internal server error"});
  }
};

module.exports = {
  register,
  login,
};
