const { request, response } = require("express");

const authorization = (rol) => {
  return async (req = request, res = response, next) => {
    if (!req.user)
      return res.status(401).json({ status: "error", msg: "Unauthorized" });
    if (req.user.rol != rol)
      return res.status(403).json({ status: "error", msg: "No permission" });
    next();
  };
};

module.exports = authorization;