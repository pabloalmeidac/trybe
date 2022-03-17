const loginSchema = require('../schemas/login');

module.exports = (req, res, next) => {
  const { username, password } = req.body;
  const { error } = loginSchema.isValid({ username, password });

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }
  return next();
};