const { login } = require('../services/loginService');

const newLogin = async (req, res, next) => {
  try {
    const logedUser = await login(req.body);
    return res.status(200).json(logedUser);
  } catch (error) {
    return next(error);
  };
};

module.exports = {
  newLogin,
};