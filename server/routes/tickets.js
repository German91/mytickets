const Router = require('express').Router();
const Controller = require('../controllers/tickets');

Router.route('/').post(Controller.create);
Router.route('/').get(Controller.getAll);

module.exports = Router;
