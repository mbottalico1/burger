var connection = require('../config/connections.js');

connection.connect(function(err) {
  if (err) {
    throw err;
  };
  console.log('connected as id ' + connection.threadId);
});

