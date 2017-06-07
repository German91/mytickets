import axios from 'axios';
import { browserHistory } from 'react-router';

class Auth {

  static authenticateUser(token) {
    window.localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = token;

    browserHistory.push('/dashboard');
  }

  static isAuthenticated() {
    const token = window.localStorage.getItem('token');

    return token;
  }

  static destroyToken(callback) {
    window.localStorage.removeItem('token');
    browserHistory.push('/');
  }

  static getToken() {
    const token = window.localStorage.getItem('token');

    return token;
  }

}

export default Auth;
