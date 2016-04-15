var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('Hello world2!');
});

app.listen(3000, function(){
    console.log("Listening on 3000");
});
