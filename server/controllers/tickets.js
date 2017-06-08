const Ticket = require('../models/tickets');

/**
 * Create new ticket
 * @param  {String}   title Ticket title
 * @param  {String}   description Ticket description
 * @return {Object}   Message and new ticket
 */
exports.create = async (req, res) => {
  try {
    const data = req.body || {};

    let ticket = new Ticket({ title: data.title, description: data.description, _owner: req.user._id });
    await ticket.save();
    res.status(200).json({ message: 'Ticket successfully created', ticket });
  } catch (e) {
    res.status(400).send(e);
  }
};

/**
 * Update Ticket
 * @param  {String}   _id  Ticket id
 * @param  {String}   title  Ticket title
 * @param  {String}   description Ticket description
 * @param  {String}   status Ticket status
 * @return {String}   Message
 */
exports.update = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const data = req.body || {};

    const ticket = await Ticket.findOne({ _id, _owner: req.user._id });
    await Ticket.update(_id, {
      $set: {
        title: data.title || ticket.title,
        description: data.description || ticket.description,
        status: data.status || ticket.status,
      }
    });

    res.status(200).send('Ticket successfully updated');
  } catch (e) {
    res.status(400).send(e);
  }
};

/**
 * Remove ticket
 * @param  {String}   _id  Ticket id
 * @return {String}    Message
 */
exports.remove = async (req, res, next) => {
  try {
    const _id = req.params.id;

    await Ticket.findByIdAndRemove(_id);
    res.status(200).send('Ticket successfully removed');
  } catch (e) {
    res.status(400).send(e);
  }
};

/**
 * Get all tickets by owner
 * @return {[Object]} Tickets
 */
exports.getAll = async (req, res, next) => {
  try {
    const tickets = await Ticket.find({ _owner: req.user._id }).populate('_owner', 'username');
    res.status(200).send(tickets);
  } catch (e) {
    res.status(400).send(e);
  }
};

/**
 * Get Ticket By Id
 * @param  {String}   _id  Ticket id
 * @return {Object}       Ticket
 */
exports.getOne = async (req, res, next) => {
  try {
    const _id = req.params.id;

    const ticket = await Ticket.findById(_id).populate('_owner', 'username');
    res.status(200).send(ticket);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.search = (req, res, next) => {

};
