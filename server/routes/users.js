const Router = require('express').Router();
const Controller = require('../controllers/users');

Router.route('/me').get(Controller.profile);
Router.route('/logout').get(Controller.logout);

module.exports = Router;
