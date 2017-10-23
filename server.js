const express = require('express');
const bodyParser = require('body-parser');
const MO = require('method-override');
const port = 8080;
// Initiate express
const app = express();
// Import routers
const routers = require('./controllers/burger_Controller.js');
// Require handlebars package
const exphbs = require('express-handlebars');

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// middleware for parsing the body of posted data
app.use(bodyParser.urlencoded({ extended: false }));
// Set handlebars as view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Use routers
app.use("/", routers);
// Listen...
app.listen(port, function(){
	console.log('Burger Server is Listening on Port: '+port);
});
