import React, { useState, useEffect } from "react";
import OrderCollapsible from "../../../../components/OrderCollapsible";

import "./Order.css";
import { COLORS } from "../../../../assets/constants";

function Order() {
  const shopImg = require("../../../../assets/image/background_2.jpg");

  return (
    <div className="Order">
      <div className="ShopImage">
        <img src={shopImg} alt="" />
      </div>

      <div className="ShopProfile">
        <div className="ShopInfo">
          <div className="ShopName">Your current ORDERs</div>
        </div>
      </div>

      <div className="OrderList">
        <div className="OrderType">
          <OrderCollapsible
            className="Pending"
            title="Pending"
          ></OrderCollapsible>

          <OrderCollapsible
            className="Accepted"
            title="Accepted"
          ></OrderCollapsible>

          <OrderCollapsible
            className="Processing"
            title="Processing"
          ></OrderCollapsible>

          <OrderCollapsible className="Ready" title="Ready"></OrderCollapsible>

          <OrderCollapsible
            className="Finished"
            title="Finished"
          ></OrderCollapsible>

          <OrderCollapsible
            className="Denied"
            title="Denied"
          ></OrderCollapsible>

          <OrderCollapsible
            className="Cancelled"
            title="Cancelled"
          ></OrderCollapsible>
        </div>
      </div>
    </div>
  );
}

export default Order;
