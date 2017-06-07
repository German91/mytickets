import axios from 'axios';
import Auth from '../utils/Auth';

/**
 * Create new account
 * @param  {Object}   payload  Username, password and email
 * @param  {Function} callback Callback function
 * @return {Object}            Response
 */
export const signup = (payload, callback) => {
  axios.post('/auth/signup', payload)
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      return callback(err.response.data);
    });
};

/**
 * Login user
 * @param  {Object}   payload  Username, password and email
 * @param  {Function} callback Callback function
 * @return {Object}            Response
 */
export const login = (payload, callback) => {
  axios.post('/auth/login', payload)
    .then((response) => {
      Auth.authenticateUser(response.data.token);
    })
    .catch((err) => {
      return callback(err);
    });
};
