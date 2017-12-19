var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/in', function(req, res, next) {
	title = conection.query('select * from usuarios',function(err,rows,fields){
			conection.end();
			if(err) throw err;

			res.json(rows);
	});
});

module.exports = router;
