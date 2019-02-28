var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
let ServerController = (function() {

    let _serverAPI = function(req,res){
        io.on('connection', function(socket){
            console.log('a user connected');
            socket.on('disconnect', function(){
              console.log('user disconnected');
            });
        });
    };
    return { 
        serverAPI  : _serverAPI
    };
})();

module.exports = ServerController;