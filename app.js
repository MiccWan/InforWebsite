'use strict';

var express = require('express');
var app = express();
var config = require('./config.json');
var colors = require('colors/safe');
var port = 7122;

colors.setTheme({
        setup: ['green','underline'],
        info: ['grey','underline'],
        error: ['red','underline'],
        title: ['blue','bold'],
});

app.use('/',express.static(__dirname+'/static'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/pages/index.html',function(){res.end();})
})

app.listen(port, function () {
  console.log(colors.setup('INFOR web listening on port '+port));
});



app.use('/assets',express.static(__dirname+'/assets'));
app.use('/images',express.static(__dirname+'/images'));
app.use('/materialize',express.static(__dirname+'/materialize'));

app.get('/',function(req,res){
	res.sendFile(__dirname+'/pages/index.html',function(){res.end();})
})
