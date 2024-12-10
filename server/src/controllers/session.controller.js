const { request, response } = require("express");
const { isValidPassword} = require("../utils/hashPassword.js");
const { createToken } = require("../utils/jw.js");
const Patient = require("../models/patientModel.js");
const Admin = require("../models/adminModel.js");
const Doctor = require("../models/doctorModel.js");

const login = async (req = request, res = response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ status: "error", error: "Incomplete values" });
    }

    const userRoles = [
      { model: Patient, role: "patient" },
      { model: Admin, role: "admin" },
      { model: Doctor, role: "doctor" },
    ];

    let user = null;
    let role = null;

    for (const userRole of userRoles) {
      user = await userRole.model.findOne({ where: { email } });
     
      if (user) {
        role = userRole.role;
        break;
      }
    }

    if (!user) {
      return res.status(404).json({ status: "error", msg: "Person not found" });
    }
    if (!isValidPassword(user.password, password)) {
      
      return res.status(401).json({ status: "error", msg: "Incorrect password" });
    }

    const token = createToken({ ...user.toJSON(), role });
    res.cookie("token", token, { httpOnly: true });

    return res.status(200).json({
      status: "ok",
      msg: "Login successful",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "error", msg: "Internal server error" });
  }
};

const logout = (req = request, res = response) => {
  try {
    res.clearCookie("token"); 
    return res.status(200).json({
      status: "ok",
      msg: "Logout successful",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "error", msg: "Internal server error" });
  }
};

module.exports = { login, logout };
