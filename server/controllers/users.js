const User = require('../models/users');

exports.profile = (req, res, next) => {
  User
    .findById(req.user._id)
    .exec((err, user) => {
      if (err) return next(err);

      res.status(200).send(user);
    });
};
