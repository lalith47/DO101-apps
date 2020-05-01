var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/happy',function(req,res) {
  res.send('Hello! Hope you are seeing this and be happy\n');
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

