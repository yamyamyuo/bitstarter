var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

var http = require('http');

var app = express(); 
var server = http.createServer(app);

app.get('/', function(req, res) {
    var html = fs.readFileSync(htmlfile).toString();    
res.send(html);
});

var port = process.env.PORT || 8080;

app.listen(port, function(){
    console.log("Listening on"+ port);
});
