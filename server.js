//Packages application needs to work

var express = require("express");
var path = require("path");


// setting up the express app.
var app = express();

//initial port 
var PORT = process.env.PORT || 8080;


//Sets up app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



app.listen(PORT, function(){
    console.log("App listening on PORT: "+ PORT);
});