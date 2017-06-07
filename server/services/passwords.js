const bcrypt = require('bcrypt');

/**
 * Encrypt a plain password and return encrypted password
 * @param  {String}   plainPassword User's plain password
 * @param  {Function} callback      Callback function
 * @return {String}                 Encrypted password
 */
exports.generatePassword = (plainPassword, callback) => {
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return callback(err);

    bcrypt.hash(plainPassword, salt, function (err, hash) {
      if (err) return callback(err);

      callback(null, hash);
    });
  });
};

/**
 * Compare plain password with hashed passowrd
 * @param  {String}   plainPassword User's plain password
 * @param  {String}   hashPassword  Current user password
 * @param  {Function} callback      Callback function
 * @return {Boolean}                If password matchs
 */
exports.comparePassword = (plainPassword, hashPassword, callback) => {
  bcrypt.compare(plainPassword, hashPassword, (err, isMatch) => {
    if (err) return callback(err);

    callback(null, isMatch);
  });
};
