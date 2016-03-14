'use strict';

require('dotenv').load();
var express = require('express');
var routes = require(process.cwd() + '/app/routes/index.js');

var app = express();
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

routes(app);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
