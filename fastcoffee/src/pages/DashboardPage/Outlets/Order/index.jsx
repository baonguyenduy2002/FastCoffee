import React, { useState, useEffect } from "react";
import axios from "axios";

function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrder();
  }, []);

  const fetchOrder = async () => {
    await axios
      .get("https://fast-coffee-be.vercel.app/api/order/get")
      .then((response) => setOrders(response.data));
  };

  return (
    <div>
      <h1>ORDER</h1>
      {orders.map((order) => (
        <div>
          <h2>{order.Order_ID}</h2>
          <h2>{order.DateTime}</h2>
        </div>
      ))}
    </div>
  );
}

export default Order;
