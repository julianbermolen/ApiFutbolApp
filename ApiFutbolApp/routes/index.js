var express = require('express');
var router = express.Router();
var conection = require('../models/mysql.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET users from bdd*/
router.get('/userBD',function(req,res,next){
	conection.query('SELECT 1 + 1 AS Solution');
});
module.exports = router;
