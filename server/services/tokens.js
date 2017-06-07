if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const jwt = require('jsonwebtoken');

/**
 * Generate Auth Token for authentication
 * @param  {Object}   payload  User's information
 * @param  {Function} callback Callback function
 * @return {Object}            Token's information
 */
exports.generateAuthToken = (payload, callback) => {
  const access = 'auth';

  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' }, (err, token) => {
    if (err) return callback(err);

    callback(null, { access, token });
  });
};

/**
 * Decode Token
 * @param  {String}   token    User's token
 * @param  {Function} callback Callback function
 * @return {Object}            Token decoded
 */
exports.decodeToken = (token, callback) => {
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return callback(err);

    callback(null, decoded);
  });
};
