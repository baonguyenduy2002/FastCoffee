const { response } = require("express");
const Order = require("../data/order");

class OrderController {

    index(req, res) {
        if (req.body) {
          Order.getAll(req.body.search, (error, response) => {
            if (error) {
              console.log(error);
              return;
            }
            res.render("user", { user: response });
          });
          return;
        }
        Order.getAll(null, (error, response) => {
          if (error) {
            console.log(error);
            return;
          }
          res.render("user", { user: response });
        });
      }
}