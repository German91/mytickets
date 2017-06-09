import Auth from './Auth';
import { profile } from '../api/userApi';

class Middlewares {

  static isLogged(nextState, replace) {
    if (!Auth.isAuthenticated()) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  }

  static isAdmin (nextState, replace) {
    profile((err, response) => {
      if (err) {
        replace({
          pathname: '/',
          state: { nextPathname: nextState.location.pathname }
        });
      } else {
        if (response.roles !== 'admin') {
          replace({
            pathname: '/',
            state: { nextPathname: nextState.location.pathname }
          });
        }
      }
    });
  }

}

export default Middlewares;
