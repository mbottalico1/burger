var express = require('express');
var Burgers = require('../models/burger.js');
var router = express.Router();

router.get('/', function(req, res) {
	burgers.all(function(data) {
		res.render('index', { burgers : data });
	});
});

router.get('/index', function(req, res) {
	 var hbsObject = { burgers: data };
    //console.log(hbsObject);
    res.render('index', hbsObject);
});


















module.exports = router;
