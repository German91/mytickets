const Router = require('express').Router();
const Controller = require('../controllers/authentication');

Router.route('/signup').post(Controller.signup);

module.exports = Router;
