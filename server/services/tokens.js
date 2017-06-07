if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const jwt = require('jsonwebtoken');

/**
 * Generate Auth Token for authentication
 * @param  {Object}   payload  User's information
 * @param  {Function} callback Callback function
 * @return {Object}            Token's information
 */
exports.generateAuthToken = async (payload) => {
  try {
    const access = 'auth';
    const token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

    return { access, token };
  } catch (e) {
    return e;
  }
};

/**
 * Decode Token
 * @param  {String}   token    User's token
 * @param  {Function} callback Callback function
 * @return {Object}            Token decoded
 */
exports.decodeToken = async (token) => {
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    return decoded;
  } catch (e) {
    return e;
  }  
};
