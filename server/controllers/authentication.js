const User = require('../models/users');
const { generateAuthToken } = require('../services/tokens');

/**
 * Create new account
 * @param  {String}  email     User email
 * @param  {String}  password  User password
 * @param  {String}  username  User username
 * @return {String}            Message
 */
exports.signup = async (req, res) => {
  try {
    const data = req.body || {};

    const user = new User(data);
    await user.save();
    res.status(200).send('Account successfully created');
  } catch (e) {
    res.status(400).send(e);
  }
};

/**
 * Login user
 * @param  {String}   email     [description]
 * @param  {String}   password  [description]
 * @return {Object}             Message and auth token
 */
exports.login = async (req, res) => {
  try {
    const data = req.body || {};

    const user = await User.findOne({ email: data.email }).select('+password');
    await user.comparePassword(data.password);
    const token = await generateAuthToken({ _id: user._id, roles: user.roles });

    res.header('Authorization', token).status(200).json({ message: 'Successfully logged', token: token.token });
  } catch (e) {
    res.status(400).send(e);
  }
};
