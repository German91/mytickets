const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps');

const Schema = mongoose.Schema;

let TicketSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    lowercase: true,
    maxLength: [30, 'The title must be less than 30 characters'],
  },

  description: {
    type: String,
    required: [true, 'Description is required'],
    lowercase: true,
    minLength: [10, 'The description must be at least 10 characters'],
    maxLength: [200, 'The description must be less than 200 characters'],
  },

  status: {
    type: String,
    required: true,
    enum: ['open', 'review', 'closed'],
    default: 'open',
  },

  _owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

TicketSchema.plugin(timestamps);

const TicketModel = mongoose.model('Ticket', TicketSchema);

module.exports = TicketModel;
