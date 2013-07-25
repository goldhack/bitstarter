var express = require('express');
var app = express();
app.use(express.logger());

var read = fs.readFileSync('/home/ubuntu/bitstarter/index.html');
var real = buffer.toString('utf-8') read; 

app.get('/', function(request, response) {
    response.send(' ' + real);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
