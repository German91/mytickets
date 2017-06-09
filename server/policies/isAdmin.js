const isAdmin = (req, res, next) => {
  
  if (!req.user && !req.token) return res.status(403).send('Access Denied');
  if (req.user.roles !== 'admin') return res.status(403).send('Access Denied');

  next();
};

module.exports = isAdmin;
