require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateTokens = (user) => {
  return {
    accessToken: jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: `${1000 * 60 * 5}`,
    }),
    refreshToken: jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: `${1000 * 60 * 60 * 12}`,
    }),
  };
};

module.exports = generateTokens