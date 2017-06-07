const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps');
const uniqueValidator = require('mongoose-unique-validator');
const validator = require('validator');

const Schema = mongoose.Schema;
const { generatePassword, comparePassword} = require('../services/passwords');
const { generateAuthToken } = require('../services/tokens');

let UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: [true, 'Username already exists'],
    maxLength: [6, 'Username must be less than 6 characters'],
    lowercase: true,
  },

  email: {
    type: String,
    required: [true, 'Email is required'],
    index: true,
    required: [true, 'Email already exists'],
    lowercase: true,
    validate: [validator.isEmail, 'Invalid email format'],
  },

  password: {
    type: String,
    required: [true, 'Password is required'],
    minLength: [6, 'Password must be at least 6 characters'],
    select: false,
  },

  roles: {
    type: String,
    required: [true, 'Role is required'],
    enum: ['admin', 'user'],
    default: 'user'
  },

  tokens: {
    select: false,
    required: false,
    type: [{
      access: {
        type: String,
        required: false,
        enum: ['auth', 'password'],
      },
      token: {
        type: String,
        required: false
      }
    }],
  },
});

UserSchema.plugin(timestamps);
UserSchema.plugin(uniqueValidator);

UserSchema.methods.generateAuthToken = function (callback) {
  let user = this;
  let payload = { _id: user._id, roles: user.roles };
  
  generateAuthToken(payload, (err, token) => {
    if (err) return callback(err);

    user.update({
      $push: { tokens: token },
    }, (err) => {
      if (err) return callback(err);

      callback(null, token.token);
    });
  });
};

UserSchema.methods.comparePassword = function (plainPassword, callback) {
  let user = this;

  comparePassword(plainPassword, user.password, (err, isMatch) => {
    if (err) return callback(err);

    callback(null, isMatch);
  });
};

UserSchema.pre('save', function (next) {
  let user = this;

  generatePassword(user.password, (err, hash) => {
    if (err) return next(err);

    user.password = hash;
    next();
  });
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
