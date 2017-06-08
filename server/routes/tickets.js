const Router = require('express').Router();
const Controller = require('../controllers/tickets');

Router.route('/').post(Controller.create);
Router.route('/').get(Controller.getAll);
Router.route('/:id').delete(Controller.remove);
Router.route('/:id').put(Controller.update);
Router.route('/:id').get(Controller.getOne);

module.exports = Router;
