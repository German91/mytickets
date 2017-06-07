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

exports.login = (req, res, next) => {
  const data = req.body || {};

  // Check params
  if (!data.email) return res.status(400).send('Email is required');
  if (!data.password) return res.status(400).send('Password is required');

  // Check if it exists
  User
    .findOne({ email: data.email })
    .select('+password')
    .exec((err, user) => {
      if (err) return next(err);

      if (!user) return res.status(500).send('Email or password is incorrect');

      // Check if the password matchs
      user.comparePassword(data.password, (err, isMatch) => {
        if (err) return next(err);

        if (!isMatch) return res.status(500).send('Email or password is incorrect');

        // Generate an auth token for current user
        user.generateAuthToken((err, token) => {
          if (err) return next(err);

          res.header('Authorization', token).status(200).json({ message: 'Successfully logged', token });
        });
      });
    });
};
