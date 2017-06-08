const User = require('../models/users');

/**
 * Get profile of current user
 * @return {Object}    User profile
 */
exports.profile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

/**
 * Logout current user removing active auth token
 * @return {String}    Message
 */
exports.logout = async (req, res) => {
  try {
    const token = req.token;
    const user = await User.findById(req.user._id).select('+tokens');
    await user.update({ $pull: { tokens: { token } } });

    res.status(200).send('User successfully logged out');
  } catch (e) {
    res.status(400).send(e);
  }
};
