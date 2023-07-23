'use strict';
require('dotenv').config();
// Start up DB Server
const { db } = require('./src/auth/models/index.js');
db.sync()
  .then(() => {
    // Start the web server
    require('./src/server.js').startup(process.env.PORT);
  })
  .catch((e) => {
    console.error('Could not start server', e.message);
  });
