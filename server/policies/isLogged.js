const { decodeToken } = require('../services/tokens');

const isLogged = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return res.status(400).send('Token not provided');

  decodeToken(token, (err, decoded) => {
    if (err) return res.status(401).send('Failed to authenticate token');

    req.user = decoded;
    req.token = token;

    next();
  });
};

module.exports = isLogged;
