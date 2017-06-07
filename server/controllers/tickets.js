const Ticket = require('../models/tickets');

exports.create = (req, res, next) => {
  const data = req.body || {};

  // Check Params
  if (!data.title) return res.status(400).send('Title is required');
  if (!data.description) return res.status(400).send('Description is required');

  let ticket = new Ticket({
    title: data.title,
    description: data.description,
    _owner: req.user._id,
  });

  // Create new ticket
  ticket.save()
    .then((response) => {
      res.status(200).json({ message: 'Ticket successfully created', ticket: response });
    })
    .catch((err) => {
      return next(err);
    });
};

exports.update = (req, res, next) => {

};

exports.remove = (req, res, next) => {

};

exports.getAll = (req, res, next) => {
  Ticket
    .find({ _owner: req.user._id })
    .populate('_owner', 'username')
    .exec((err, tickets) => {
      if (err) return next(err);

      res.status(200).send(tickets);
    });
};

exports.getOne = (req, res, next) => {

};

exports.search = (req, res, next) => {

};
