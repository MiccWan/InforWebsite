'use strict';

var express = require('express');
var app = express();
var config = require('./config.json');
var colors = require('colors/safe');
var port = 7122;

colors.setTheme({
        setup: ['magenta','underline'],
        emphasize: ['green','bold'],
        info: ['green','underline'],
        error: ['red','underline'],
        title: ['cyan','bold'],
});

app.use('/',express.static(__dirname+'/static'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/pages/index.html',function(){
        getReq("GET","/")
        res.end();
    })
})

app.listen(port, function () {
  console.log( colors.setup('INFOR web listening on port '+port) );
});

function getReq(_method,_path){
    console.log(colors.title("[System] ")+colors.info('Get %s request to %s.'),_method,_path);
}