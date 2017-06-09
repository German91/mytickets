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
 * Get Ticket By Id
 * @param  {String}   id       Ticket id
 * @param  {Function} callback Function callback
 * @return {Object}            Ticket
 */
export const viewTicket = (id, callback) => {
  axios.get(`/tickets/${id}`)
    .then((response) => {
      callback(null, response.data);
    })
    .catch((err) => {
      return callback(err);
    });
};

/**
 * Update Ticket
 * @param  {String}   id       Ticket id
 * @param  {Object}   payload  Ticket information
 * @param  {Function} callback Callback function
 * @return {String}            Message
 */
export const updateTicket = (id, payload, callback) => {
  axios.put(`/tickets/${id}`, payload)
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

/**
 * Search tickets by term
 * @param  {String} search search term
 * @return {[Object]}      Tickets
 */
export const searchTickets = (search, callback) => {
  axios.get(`/tickets/search/${search}`)
    .then((response) => {
      callback(null, response.data);
    })
    .catch((err) => {
      return callback(err);
    });
};
