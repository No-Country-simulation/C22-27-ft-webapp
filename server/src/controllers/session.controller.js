const { request, response } = require("express");
const { createHash, isValidPassword } = require("../utils/hashPassword.js");
const { createToken, } = require("../utils/jw.js");
const Patient = require('../models/patientModel.js');

const register = async (req = request, res = response) => {
  try {
    const { rol, age, dateBirth, address, phone, email, password, name } = req.body;

    // Verificar si ya existe un usuario con el email proporcionado
    const existingPatient = await Patient.findOne({ where: { email } });
    if (existingPatient) {
      return res.status(400).json({ status: "error", msg: "Email already registered" });
    }
    
    const hashedPassword = createHash(password);

    // Crear el usuario en la base de datos
    const newPatient = await Patient.create({
      name,
      rol: rol || "user",
      age,
      email,
      dateBirth,
      address,
      phone,
      email,
      password: hashedPassword,

    });

    res.status(201).json({ status: "ok", msg: "Patient created", Patient: newPatient });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", msg: "Internal server error" });
  }
};


const login = async (req = request, res = response) => {
  try {
    const { email, password } = req.body;

    // Buscar el usuario en la base de datos por email
    const patient = await Patient.findOne({ where: { email } });
    if (!patient) {
      return res.status(404).json({ status: "error", msg: "patient not found" });
    }
    // Validar la contraseña
    const passwordMatch = isValidPassword(patient.password, password);
    if (!passwordMatch) {
      return res.status(401).json({ status: "error", msg: "Incorrect password" });
    }
    // Generar el token
    const token = createToken(patient);

    // Configurar la cookie con el token
    res.cookie("token", token, { httpOnly: true });

    // Responder con éxito
    return res.status(200).json({
      status: "ok",
      msg: "Login successful",
      payload: { id: patient.id, email: patient.email, name: patient.name },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "error", msg: "Internal server error" });
  }
};

module.exports = {
  register,
  login,
};
