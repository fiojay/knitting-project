
var http=require('http');

var s = http.createServer(function(req,res){
	res.end("Hey");

});

s.listen(8080);
