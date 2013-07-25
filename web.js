var express = require('express');
var app = express();
app.use(express.logger());

//var buff = fs.readFileSync('index.html', 'utf8');
 

//var ear = buff.toString('utf-8',0,50);

app.get('/', function(request, response) {
    response.send(ear);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

