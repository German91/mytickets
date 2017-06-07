const Router = require('express').Router();
const Controller = require('../controllers/users');

Router.route('/me').get(Controller.profile);

module.exports = Router;
