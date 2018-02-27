const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});