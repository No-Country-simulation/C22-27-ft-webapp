const jwt = require("jsonwebtoken");
const { JWT_SECRET_CODE } = process.env;

const createToken = (user) => {
  
  const { _id, email, rol} = user;

  const token = jwt.sign({ _id, email, rol}, JWT_SECRET_CODE, {
    expiresIn: "20m",
  });
 
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET_CODE);
    return decoded;
  } catch (error) {
    return null;
  }
};

module.exports = {
  verifyToken,
  createToken,
}