
var Express = require('express');
var webserver = new Express();

var PORT = 3000;

webserver.use('/', Express.static('build'));

webserver.listen(
	PORT,
	() => console.log('Example app listening on port ' + PORT + '!')
);

module.exports = webserver;