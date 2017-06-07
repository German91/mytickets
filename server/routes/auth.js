const Router = require('express').Router();
const Controller = require('../controllers/authentication');

Router.route('/signup').post(Controller.signup);
Router.route('/login').post(Controller.login);

module.exports = Router;
