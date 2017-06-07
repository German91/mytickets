import express from 'express';
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const PORT = process.env.PORT || 8000;

let app = express();

// Database
require('./database');
require('./database/fixtures');

// Security
app.disable('x-powered-by');
app.use(helmet.xssFilter());
app.use(helmet.noCache());
app.use(helmet.noSniff());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());

// Config
app.use(logger('dev'));
app.use(bodyParser.json({ type: '*/*' }));
app.use(bodyParser.urlencoded({ 'extended': false }));
app.use(cookieParser());
app.use(methodOverride());
app.use(compression());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Routes
require('./server/routes')(app);

// Connect Server
app.listen(PORT, () => {
  console.log(`App listening on ${ PORT }`);
});
