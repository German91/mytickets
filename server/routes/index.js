const authRoutes = require('./auth');

const routes = (app) => {
  app.use('/api/auth', authRoutes);
};

module.exports = routes;
