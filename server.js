// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
var express = require('express');
var app = express();

var jsonData = {count: 12, message: 'hey'};

app.get('/', function(request, response){
  response.setHeader('Content-Type', 'text/html')
  response.sendFile(__dirname, '/index.html', function(err){
    if(err){
      response.status(500).send(err)
    }
  })
})

app.get('/data', function(request, response){
  response.json(jsonData);
});

var port = 3000
app.listen(port, function(){
  console.log('listening on port 3000!');
});
