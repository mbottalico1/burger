var connection = require('../config/connections.js');

var orm = {

  all: function(cb) {

    // Run MySQL Query
    connection.query('SELECT * FROM burgers', function (err, result) {
      if (err) throw err;
      cb(result);
    });

  },

  create: function(burger_name, cb){

  }
};


module.exports = orm;
