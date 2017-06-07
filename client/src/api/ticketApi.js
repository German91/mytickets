import axios from 'axios';

/**
 * Get all tickets from current user
 * @param  {Function} callback Callback function
 * @return {[Object]}          Tickets
 */
export const getTickets = (callback) => {
  axios.get('/tickets')
    .then((response) => {
      callback(null, response.data);
    })
    .catch((err) => {
      return callback(err);
    });
};

/**
 * Create new ticket
 * @param {Object}   payload  Title and description
 * @param {Function} callback Callback Function
 */
export const addTicket = (payload, callback) => {
  axios.post('/tickets', payload)
    .then((response) => {
      callback(null, response.data);
    })
    .catch((err) => {
      return callback(err);
    });
};

/**
 * Remove ticket
 * @param  {String}   id       Ticket's id
 * @param  {Function} callback Callback function
 * @return {Object}            Message
 */
export const removeTicket = (id, callback) => {
  axios.delete(`/tickets/${id}`)
    .then((response) => {
      callback(null, response.data);
    })
    .catch((err) => {
      return callback(err);
    });
};
