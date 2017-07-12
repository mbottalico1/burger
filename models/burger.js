var orm = require('../config/orm.js');

var burgers = {
	all: function(cb){
		orm.all('burgers', function(res){
			cb(res);
		});
	},
	create: function(burger_name, cb){
		orm.create('burgers', burger_name, function(res){
			cb(res);
		});
	},
	update: function(burger_name, cb){
		orm.update('burgers', burger_name, function(res){
			cb(res);
		});
	}
};

module.exports = burgers;