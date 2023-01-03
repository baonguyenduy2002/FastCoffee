const sql = require("../../config/db/index");

const Order = function (order) {
  this.Order_ID = order.Order_ID;
  this.Datetime = user.Datetime;
  this.Status = user.Status;
  this.Order_note = user.Order_note;
  this.Shop_ID = user.Shop_ID;
  this.Customer_ID = user.Customer_ID;
};

Order.getOne = (Order_ID, result) => {
  const query = `SELECT * FROM order WHERE Order_ID = '${Order_ID}'`;
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

Order.getAll = (Order_ID, result) => {
  let query = "SELECT * FROM order";
  if (Order_ID) {
    query += ` WHERE Order_ID LIKE '%${Order_ID}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

module.exports = Order;
