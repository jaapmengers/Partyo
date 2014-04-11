var express = require('express'),
  http = require('http'),
  path = require('path');


var app = module.exports = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server, {log: false});

app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 3000;

/* Listen */
server.listen(port);


io.sockets.on('connection', function(socket){

	console.log('Connection');

	socket.on('request:takePicture', function(){
		console.log('Receive request');
	  	io.sockets.emit('receive:takePicture');
	});
});