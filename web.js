var express = require('express');

var app = express.createServer(express.logger());


var fs = require('fs');

app.get('/', function(request, response) {
  var hellotext = fs.readFileSync("index.html").toString();
  response.send(hellotext);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
