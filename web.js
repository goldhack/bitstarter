var express = require('express');
var app = express();
app.use(express.logger());

var buffer = new Buffer(50);
buffer = fs.readFileSync('/home/ubuntu/bitstarter/index.html');
 


app.get('/', function(request, response) {
    response.send(buffer + buf.toString('utf8',0, buffer));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
