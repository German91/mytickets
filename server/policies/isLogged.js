const { decodeToken } = require('../services/tokens');

const isLogged = async (req, res, next) => {
  const token = req.header('Authorization');
  
  try {
    const decoded = await decodeToken(token);

    if (!decoded._id) throw new Error(decoded);

    req.user = decoded;
    req.token = token;

    next();
  } catch(e) {
    res.status(401).send('Failed to authenticate token');
  }
};

module.exports = isLogged;
