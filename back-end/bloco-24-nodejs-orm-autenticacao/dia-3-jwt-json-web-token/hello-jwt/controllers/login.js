const { SECRET } = process.env;
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const { username, password } = req.body;
    let admin = false;
    const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };

    if (username === 'admin' && password ==='s3nh4S3gur4???') {
      admin = true;
    }

    const payload = { username, admin };
    
    const token = jwt.sign(payload, SECRET, jwtConfig);
  
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }

}
    