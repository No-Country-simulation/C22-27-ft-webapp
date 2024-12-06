const { request, response } = require("express");
const { createHash, isValidPassword } = require("../utils/hashPassword.js");
const { createToken, } = require("../utils/jw.js");
const Patient = require('../models/patientModel.js');
const Admin = require("../models/adminModel.js");
const Doctor = require("../models/doctorModel.js")

const register = async (req = request, res = response) => {
  try {
    const { email, rol, password, ...rest } = req.body;

    // Verificar si ya existe un usuario con el email proporcionado
    const existingPatient = await Patient.findOne({ where: { email } });

    if (existingPatient) return res.status(400).json({ status: "error", msg: "Email already registered" });

    const hashedPassword = createHash(password);

    // Crear el usuario en la base de datos
    const newPatient = await Patient.create({
      rol: rol || "user",
      email,
      password: hashedPassword,
      ...rest
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

    if (!email || !password) return res.status(400).send({ status: "error", error: "Incomplete values" });

    // Buscar el usuario en la base de datos por email
    const patient = await Patient.findOne({ where: { email } });
    const admin = await Admin.findOne({ where: { email } })
    const doctor = await Doctor.findOne({ where: { email } })

    if (!patient && !admin && !doctor) {
      return res.status(404).json({ status: "error", msg: "Person not found" });
    }
    // Validar la contraseña
    if (patient) {
      const passwordMatch = isValidPassword(patient.password, password);
      if (!passwordMatch) {
        return res.status(401).json({ status: "error", msg: "Incorrect password" });
      }
      const token = createToken(patient);

      // Configurar la cookie con el token
      res.cookie("token", token, { httpOnly: true });

      return res.status(200).json({
        status: "ok",
        msg: "Login successful",
        payload: { id: patient.id, email: patient.email, name: patient.name },
      });

    }
    if (admin) {
      const passwordMatch = isValidPassword(admin.password, password);

      if (!passwordMatch) {
        return res.status(401).json({ status: "error", msg: "Incorrect password" });
      }
      const token = createToken(admin);

      // Configurar la cookie con el token
      res.cookie("token", token, { httpOnly: true });

      return res.status(200).json({
        status: "ok",
        msg: "Login successful",
        payload: { id: admin.id, email: admin.email, name: admin.name },
      });
    }

    if (doctor) {
      const passwordMatch = isValidPassword(doctor.password, password);

      if (!passwordMatch) {
        return res.status(401).json({ status: "error", msg: "Incorrect password" });
      }
      const token = createToken(doctor);

      // Configurar la cookie con el token
      res.cookie("token", token, { httpOnly: true });

      return res.status(200).json({
        status: "ok",
        msg: "Login successful",
        payload: { id: doctor.id, email: doctor.email, name: doctor.name },
      });
    }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: "error", msg: "Internal server error" });
    }
  };

  module.exports = {
    register,
    login,
  };
