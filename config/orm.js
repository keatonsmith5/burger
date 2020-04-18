const connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
    selectAll: (tableInput, cb) => {
      const queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableInput], (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: (table, newRowData, cb) => {
        const queryString = "INSERT INTO ?? SET ?";
        const values = [table, newRowData];
    
        connection.query(queryString, values, (err, result) => {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
    updateOne: (table, updateValues, condition, cb) => {
        const queryString = "UPDATE ?? SET ? WHERE ?";
        const values = [table, updateValues, condition];
    
        console.log(queryString);
        connection.query(queryString, values, (err, result) => {
          if (err) {
            throw err;
          }
          cb(result);
        });
      }
    };

    module.exports = orm;

    orm.updateOne("burgers", {devoured: 1}, {id: 1}, result => console.log(result));