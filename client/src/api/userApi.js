import axios from 'axios';

/**
 * Get current user profile
 * @param  {Function} callback Callback function
 * @return {Object}            User profile
 */
export const profile = (callback) => {
  axios.get('/users/me')
    .then((response) => {
      callback(null, response.data);
    })
    .catch((err) => {
      return callback(err);
    });
};

/**
 * Logout user
 * @param  {Function} callback Callback function
 * @return {Object}            Message
 */
export const logout = (callback) => {
  axios.get('/users/logout')
    .then((response) => {
      callback(null, response.data);
    })
    .catch((err) => {
      return callback(err);
    });
};

/**
 * Get all users
 * @param  {Function} callback Callback function
 * @return {[Object]}          Users
 */
export const getUsers = (callback) => {
  axios.get('/users')
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      return callback(err);
    });
};
