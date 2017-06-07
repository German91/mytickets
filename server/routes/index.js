const authRoutes = require('./auth');
const userRoutes = require('./users');
const ticketRoutes = require('./tickets');

const isLogged = require('../policies/isLogged');

const routes = (app) => {
  app.use('/api/auth', authRoutes);
  app.use('/api/users', isLogged, userRoutes);
  app.use('/api/tickets', isLogged, ticketRoutes);
};

module.exports = routes;
