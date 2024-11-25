const { request, response } = require("express");
const { isValidPassword } = require("../utils/hashPassword.js");
const { createToken } = require("../utils/jw.js");

const register = async (req = request, res = response) => {
  try {
    res.status(201).json({ status: "ok", msg: "User created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", msg: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const token = createToken(req.user);

    res.cookie("token", token, { httpOnly: true });

    return res.status(200).json({ status: "ok", payload: req.user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", msg: "Internal server error" });
  }
};

const auth = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userRepository.getByEmail(email);

    if (!user || !isValidPassword(user.password, password))
      return res
        .status(401)
        .json({ status: "error", msg: "User or email not found" });

    const token = createToken(user);

    res.cookie("token", token, { httpOnly: true });

    return res.status(200).json({ status: "ok", user, token });
  } catch (error) {
    console.log(error);

    res.status(500).json({ status: "error", msg: "Internal server error" });
  }
};

module.exports = {
  register,
  login,
  auth,
};
