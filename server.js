var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

require('./routing/api-routes.js')(app);
require('./routing/html-routes.js')(app);

app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});

