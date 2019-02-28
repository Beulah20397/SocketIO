var express = require('express')
var app = express.Router();
var ServerController = require('../controllers/server');
var ClientController = require('../controllers/client');
module.exports = {
    configure: function(app,router){

        app.get('/index',function(req,res){
            res.sendFile('/index.html', { root: './views' });
        });
        app.get('/server',ServerController.serverAPI)
    }
}
