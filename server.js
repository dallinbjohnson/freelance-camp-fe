var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'app')));
var port = process.env.PORT || '4000';
app.set('port', port);
var server = app.listen(port);
console.log('listening on port 4000');