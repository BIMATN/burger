const burger = require('../model/burgers.js');
const express = require('express'), router = express.Router();

router.get('/', function(req, res){
	console.log("Alert: Homepage Accessed");
	//This will fetch all the burgers in the SQL database and render them to the webpage
	burger.all(function(res) /*This res argument hold the database data that has travelled all the way from orm.js to burger.js to here and will not be passed to handlebars*/{
    let burgerObject = {
      burgers: res
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.get('/api/burgers', function(req, res){
	console.log("Alert: Burger List Retrieved from API");

});

router.post('/api/burgers', function(req, res){
	console.log("Alert: Burger Data Posted to API");

});



module.exports=router;