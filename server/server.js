/**
 * Created by joelmiller on 1/8/16.
 */
var express = require('express');
var index = require('./routes/index');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname,'./public')));
app.use(bodyParser.json());

app.use('/', index);

var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log('Listen on port', port)
});

module.exports = app;