var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//serve static content from the public directory
app.use(express.static(__dirname + '/app/public'));

app.use('/', require('./app/routing/htmlRoutes.js'));
app.use('/api', require('./app/routing/apiRoutes.js'));

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});