const burger = require('../model/burgers.js');
const express = require('express'); 
const router = express.Router();

router.get('/', function(req, res) {
	console.log("Alert: Homepage Accessed");
	//This will fetch all the burgers in the SQL database and render them to the webpage
	burger.all(function(data) { /*This data argument holds the database data that has travelled all the way from orm.js to burger.js to here and will not be passed to handlebars*/
    let burgerObject = {
      burgers: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
    //res.end();
  });
});

router.get('/api/burgers', function(req, res){
	console.log("Alert: Burger List Retrieved from API");
  burger.all(function(data){
    res.json(data);
  });
  //res.end();
});

router.post('/api/burgers', function(req, res){
	console.log("Alert: Burger Data Posted to API");
  //res.end();
});

module.exports=router;