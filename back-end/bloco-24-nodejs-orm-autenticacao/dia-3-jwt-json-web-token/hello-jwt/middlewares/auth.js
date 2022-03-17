const { SECRET } = process.env;
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: { message: 'Token not found' } });
  }
  try {
    const decoded = jwt.verify(token, SECRET);
    
    if (!decoded) {
      return res.status(401).json({ error: { message: '<mensagem de erro da biblioteca>' } });
    } 
    
    req.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};