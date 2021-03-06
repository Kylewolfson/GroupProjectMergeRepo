require('dotenv').load();
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();

app.get('/newServer/:billId', function(httpRequest, httpResponse) {
  debugger;
  var url = 'https://www.opensecrets.org/lobby/billsum.php?id=' + httpRequest.params.billId;
  console.log(url);
  request.get(url, function(error, steamHttpResponse, steamHttpBody) {
    //console.log(steamHttpResponse);
    httpResponse.setHeader('Content-Type', 'application/json');
    httpResponse.setHeader('Access-Control-Allow-Origin', '*');
    httpResponse.send(steamHttpResponse);
  });
});

var port = 4000;
var server = app.listen(port);
console.log('Listening on port ' + port);
