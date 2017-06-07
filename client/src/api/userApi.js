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
