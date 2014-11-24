var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/files'));


app.get('/', function(request, response){
  response.sendFile("index.html", {"root": __dirname});
});

app.listen(8080);
