var mysql = require('mysql');
var conection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: ''
});

conection.connect();
conection.query('SELECT 1 + 1 AS Solution', function(err,rows,fields){
	if(err) throw err;
	console.log('The solution is: ', rows[0].solution);
});

conection.end();