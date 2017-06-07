const User = require('../models/users');

exports.signup = (req, res, next) => {
  const data = req.body || {};

  // Check params
  if (!data.username) return res.status(400).send('Username is required');
  if (!data.email) return res.status(400).send('Email address is required');
  if (!data.password) return res.status(400).send('Password is required');

  User
    .findOne({ email: data.email })
    .exec((err, exists) => {
      if (err) return next(err);

      if (exists) return res.status(500).send('Account already exists');

      let user = new User(data);

      user.save()
        .then((response) => {
          res.status(200).json({ message: 'Account successfully created' });
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    });
};
