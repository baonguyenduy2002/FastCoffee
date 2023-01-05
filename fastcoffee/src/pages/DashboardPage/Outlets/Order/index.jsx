import React, { useState, useEffect } from "react";
import OrderCollapsible from "../../../../components/OrderCollapsible";

import "./Order.css";
import { COLORS } from "../../../../assets/constants";
import * as api from "../../../../controller/data/order";



export const OrderProccesor = React.createContext();

function Order() {
  const shopImg = require("../../../../assets/image/background_2.jpg");
  const [renderTrigger, setTrigger] = useState(false);
  const [orders, setOrders] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [menu, setMenu] = useState([
    {
      Item_ID: 1,
      Name: "nothing",
    },
    {
      Item_ID: 2,
      Name: "nothing",
    },
    {
      Item_ID: 3,
      Name: "nothing",
    },
    {
      Item_ID: 4,
      Name: "nothing",
    },
    {
      Item_ID: 5,
      Name: "nothing",
    },
    {
      Item_ID: 6,
      Name: "nothing",
    },
    {
      Item_ID: 7,
      Name: "nothing",
    },
    {
      Item_ID: 8,
      Name: "nothing",
    },
    {
      Item_ID: 9,
      Name: "nothing",
    },
    {
      Item_ID: 10,
      Name: "nothing",
    },
    {
      Item_ID: 11,
      Name: "nothing",
    },
    {
      Item_ID: 12,
      Name: "nothing",
    },
    {
      Item_ID: 13,
      Name: "nothing",
    },
    {
      Item_ID: 14,
      Name: "nothing",
    },
    {
      Item_ID: 15,
      Name: "nothing",
    },
    {
      Item_ID: 16,
      Name: "nothing",
    },
    {
      Item_ID: 17,
      Name: "nothing",
    },
    {
      Item_ID: 18,
      Name: "nothing",
    },
    {
      Item_ID: 19,
      Name: "nothing",
    },
    {
      Item_ID: 20,
      Name: "nothing",
    },
    {
      Item_ID: 21,
      Name: "nothing",
    },
    {
      Item_ID: 22,
      Name: "nothing",
    },
    {
      Item_ID: 23,
      Name: "nothing",
    },
    {
      Item_ID: 24,
      Name: "nothing",
    },
    {
      Item_ID: 25,
      Name: "nothing",
    },
  ]);

  useEffect(() => {
    api
      .getOrders("api/order/get")
      .then((res) => (res.data ? setOrders(res.data) : setOrders([])));
    setTimeout(api
      .getOrders_Items("api/order/get/order_item")
      .then((res) => (res.data ? setItemList(res.data) : setItemList([]))), 500);
    setTimeout(api.getOrders_Items("api/item/get/").then((res) =>
      res.data
        ? setMenu(res.data)
        : setMenu([
          {
            Item_ID: 1,
            Name: "nothing",
          },
          {
            Item_ID: 2,
            Name: "nothing",
          },
          {
            Item_ID: 3,
            Name: "nothing",
          },
          {
            Item_ID: 4,
            Name: "nothing",
          },
          {
            Item_ID: 5,
            Name: "nothing",
          },
          {
            Item_ID: 6,
            Name: "nothing",
          },
          {
            Item_ID: 7,
            Name: "nothing",
          },
          {
            Item_ID: 8,
            Name: "nothing",
          },
          {
            Item_ID: 9,
            Name: "nothing",
          },
          {
            Item_ID: 10,
            Name: "nothing",
          },
          {
            Item_ID: 11,
            Name: "nothing",
          },
          {
            Item_ID: 12,
            Name: "nothing",
          },
          {
            Item_ID: 13,
            Name: "nothing",
          },
          {
            Item_ID: 14,
            Name: "nothing",
          },
          {
            Item_ID: 15,
            Name: "nothing",
          },
          {
            Item_ID: 16,
            Name: "nothing",
          },
          {
            Item_ID: 17,
            Name: "nothing",
          },
          {
            Item_ID: 18,
            Name: "nothing",
          },
          {
            Item_ID: 19,
            Name: "nothing",
          },
          {
            Item_ID: 20,
            Name: "nothing",
          },
          {
            Item_ID: 21,
            Name: "nothing",
          },
          {
            Item_ID: 22,
            Name: "nothing",
          },
          {
            Item_ID: 23,
            Name: "nothing",
          },
          {
            Item_ID: 24,
            Name: "nothing",
          },
          {
            Item_ID: 25,
            Name: "nothing",
          },
        ]), 1000)
    );
  }, [renderTrigger]);

  const re_render = () => {
    if (renderTrigger)
      setTrigger(false)
    else
      setTrigger(true)
  }

  return (
    <OrderProccesor.Provider value={{ re_render: re_render, orders: orders, menu: menu, itemList: itemList }}>
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
    </OrderProccesor.Provider>
  );
}

export default Order;
