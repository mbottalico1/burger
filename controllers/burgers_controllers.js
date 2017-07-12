var express = require('express');
var Burgers = require('../models/burger.js');
var router = express.Router();

router.get('/', function(req, res){
	res.redirect('/burgers')
});

router.get('/burgers', function(req, res) {
	Burgers.all(function(data) {
	var hbsObject = { burgers: data };
    res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function(req, res) {
	burgers.create([ 'burger_name'], [req.body.burger_name ], function (data) {
		res.redirect('/');
	})
	 
});




module.exports = router;













module.exports = router;
