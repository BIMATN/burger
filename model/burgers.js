// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res)/*This res argument hold the database data and was passed from the orm.js when it accessed the database and is now being passed to the burgers_Controller function as an argument*/;
    });
  },
  create: function(burger, devoured, cb){
    orm.insertOne("burgers", burger, devoured, function(res) {
      cb(res);
    });
  },
  update: function(devoured, burger, cb) {
    orm.update("burgers", devoured, burger, function(res) {
      cb(res);
    });
  },
  /*delete: function () {
    orm.update("", , function(res){
      cb(res);
    });
  }*/
};

// Export the database functions for the controller (burger_Controllers.js).
module.exports = burger;