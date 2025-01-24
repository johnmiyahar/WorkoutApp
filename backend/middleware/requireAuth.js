const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).send({ error: 'Authentication required' });
  }

  jwt.verify(token, 'yourSecretKey', (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: 'Invalid Token' });
    }
    req.userId = decoded.id;
    next();
  });
};

module.exports = requireAuth;
