require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtCreator = ({ name, email, role }) => {
  const secret = process.env.SECRET;
  const jwtConfig = {
    expiresIn: '1H',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ name, email, role }, secret, jwtConfig);
  return token;
};

module.exports = jwtCreator;