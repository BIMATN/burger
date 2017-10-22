var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??";  // ?? = table name passed as argument to function
    console.log(queryString);
    connection.query(queryString, [table], function(err, res)/*This res argument holds the database data*/ {
      if (err) throw err;
      console.log(res);
      cb(res)/*This res argument holds the database data and is passed as an argument to the function that was passed to the selectAll function*/;
    });
  },
  insertOne: function(table, burger, devoured, cb) {
    var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)";
    console.log(queryString);
    connection.query(queryString, [table, burger, devoured], function(err, res) {
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  },
  updateOne: function(table, devoured, burger, cb) {
    var queryString = "UPDATE ??, SET devoured = ? WHERE burger_name = ?";

    connection.query(queryString, [table, devoured, burger], function(err, res) {
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  }
};

module.exports = orm;