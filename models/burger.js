const orm = require("../config/orm.js");

const burger = {
    selectAll: (cb) => {
      orm.selectAll("burgers", (res) => {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: (newBurger, cb) => {
      orm.insertOne("burgers", newBurger, (res) => {
        cb(res);
      });
    },
    updateOne: (burgerData, criteria, cb) => {
      orm.updateOne("burgers", burgerData, criteria, (res) => {
        cb(res);
      });
    }
  };

  module.exports = burger;