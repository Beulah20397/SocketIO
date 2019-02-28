const express = require('express');
bodyParser	= require('body-parser');
path 		= require('path');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var router=express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({}));

app.use(function(req, res, next) {
	//req.setTimeout(0);
	req.setTimeout(6000000); // settime out to 200 mins - 20 * 60 * 1000
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
	next();
});


app.use(express.static(__dirname + '/public'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

var routes = require('./routes/app');
const port = process.env.PORT || 8080;
routes.configure(app, router);
io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('disconnect', function(){
	  console.log('user disconnected');
	});
});
app.listen(port, function() {
	console.log('Express server listening on port ' + port);
})