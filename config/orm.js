var connection = require('../config/connections.js');

var orm = {

  all: function(tableInput, cb) {
        var select = 'SELECT * FROM ' + tableInput + ';';
        connection.query(select, function(err, result) {
            if (err) throw err;
            cb(result);
        });

  },

  create: function(burger_name, cb){
    var burgerName = burgers;
    var query = "INSERT INTO burgers (burger_name) VALUES ('" + burgerName + "')";
     connection.query(query, function(err, result) {
      if (err) throw err;
      cb(result);
    });
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
