var connection = require('../config/connections.js');

var orm = {

  all: function(cb) {
    connection.query('SELECT * FROM burgers', function (err, result) {
      if (err) 
      	throw err;
      cb(result);
    });

  },

  create: function(burger_name, cb){

  },



  update: function(burger_id, cb){
  	connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true, id: id}], function(err, result) {
  		if(err)
  			throw err;
  		cb(result);
  	})
  }

};

module.exports = orm;
