const Router = require('express').Router();
const Controller = require('../controllers/users');
const isAdmin = require('../policies/isAdmin');

Router.route('/me').get(Controller.profile);
Router.route('/logout').get(Controller.logout);
Router.route('/').get(isAdmin, Controller.getAll);

module.exports = Router;
