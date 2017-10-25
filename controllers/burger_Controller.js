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
    res.end();
  });
});

router.post('/api/burgers', function(req, res){
	console.log("Alert: Burger Data Posted to API");
  let newBurger = req.body.burgerName;
  console.log(newBurger);
  burger.create(newBurger, 0, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were added, then something failed, so 404
      return res.status(404).end();
    } 
    else {
      res.status(200).end();
    };
  });
});

router.put('/api/burgers/:id', function(req, res){
  let id = parseInt(req.params.id);
  console.log("this is the provided id: "+id);
  console.log("Alert: Burger Data Has Been Updated");
  burger.update(1, id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } 
    else {
      res.status(200).end();
    };
  });
});

module.exports=router;