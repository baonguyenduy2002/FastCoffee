import React, { useState, useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import moment from "moment";

import "./OrderTag.css";

import * as api from "../../../controller/data/order";
import image from "../../../assets/image/drink_1.jpg";
import { OrderProccesor } from "../../../pages/DashboardPage/Outlets/Order";

function OrderTag(props) {
  const { title } = props;
  const { orders, menu, itemList , re_render} = useContext(OrderProccesor)

  const handleAccept = (id) => {
    return () => {
      api.makeAccepted(`api/order/accept/${id}`);
      re_render()
    };
  };

  const handleDeny = (id) => {
    return () => {
      api.makeNext(`api/order/deny/${id}`);
      re_render()
    };
  };

  const handleProcess = (id) => {
    return () => {
      api.makeNext(`api/order/process/${id}`);
      re_render()
    };
  };

  const handleReady = (id) => {
    return () => {
      api.makeNext(`api/order/ready/${id}`);
      re_render()
    };
  };

  const handleFinish = (id) => {
    return () => {
      api.makeNext(`api/order/finish/${id}`);
      re_render()
    };
  };

  

  if (title === "Pending")

    return (
      <>
        {orders.map((order) => {
          if (order.Status === props.title)
            return (
              <Card className="card-group OrderCard" style={{ width: "80rem" }}>
                <Card.Body style={{ width: "500px" }} className="col-md-2">
                  <Card.Title className="OrderName text">
                    # {order.Order_ID}
                  </Card.Title>
                  <Card.Text className="underline text">
                    {moment(order.DateTime).date()}/
                    {moment(order.DateTime).month()}/
                    {moment(order.DateTime).year()} at{" "}
                    {moment(order.DateTime).hour()}:
                    {moment(order.DateTime).minute()}:
                    {moment(order.DateTime).second()}
                  </Card.Text>
                  <Card.Text className="text">
                    Note: {order.Order_note}
                  </Card.Text>
                  <button class="button" onClick={handleAccept(order.Order_ID)}>
                    Accept
                  </button>
                  <button class="button" onClick={handleDeny(order.Order_ID)}>
                    Deny
                  </button>
                </Card.Body>
                {itemList.map((itemIndex) => {
                  if (itemIndex.Order_ID === order.Order_ID)
                    return (
                      <div class="row row-cols-1 row-cols-md-3">
                        <Card.Body className="OrderImg">
                          <Card.Img
                            className="OrderImg"
                            src={image}
                            alt="File interupted"
                          />
                          <Card.Text className="maxleng text">
                            {menu[itemIndex.Item_ID - 1].Name}
                          </Card.Text>
                          <Card.Text className="text">
                            Quantity: {itemIndex.Quantity}
                          </Card.Text>
                          <Card.Text className="maxleng text">
                            Note: {itemIndex.Item_Note}
                          </Card.Text>
                        </Card.Body>
                      </div>
                    );
                })}
              </Card>
            );
        })}
      </>
    );
  else if (props.title === "Accepted")
    return (
      <>
        {orders.map((order) => {
          if (order.Status === props.title)
            return (
              <Card className="card-group OrderCard" style={{ width: "80rem" }}>
                <Card.Body className="col-md-2">
                  <Card.Title className="OrderName text">
                    # {order.Order_ID}
                  </Card.Title>
                  <Card.Text className="underline text">
                    {moment(order.DateTime).date()}/
                    {moment(order.DateTime).month()}/
                    {moment(order.DateTime).year()} at{" "}
                    {moment(order.DateTime).hour()}:
                    {moment(order.DateTime).minute()}:
                    {moment(order.DateTime).second()}
                  </Card.Text>
                  <Card.Text className="text">
                    Note: {order.Order_note}
                  </Card.Text>
                  <button
                    class="button"
                    onClick={handleProcess(order.Order_ID)}
                  >
                    Process
                  </button>
                </Card.Body>
                {itemList.map((itemIndex) => {
                  if (itemIndex.Order_ID === order.Order_ID)
                    return (
                      <div class="row row-cols-1 row-cols-md-3">
                        <Card.Body className="OrderImg">
                          <Card.Img
                            className="OrderImg"
                            src={image}
                            alt="File interupted"
                          />
                          <Card.Text className="maxleng text">
                            {menu[itemIndex.Item_ID - 1].Name}
                          </Card.Text>
                          <Card.Text className="text">
                            Quantity: {itemIndex.Quantity}
                          </Card.Text>
                          <Card.Text className="maxleng text">
                            Note: {itemIndex.Item_Note}
                          </Card.Text>
                        </Card.Body>
                      </div>
                    );
                })}
              </Card>
            );
        })}
      </>
    );
  else if (props.title === "Processing")
    return (
      <>
        {orders.map((order) => {
          if (order.Status === props.title)
            return (
              <Card className="card-group OrderCard" style={{ width: "80rem" }}>
                <Card.Body className="col-md-2">
                  <Card.Title className="OrderName text">
                    # {order.Order_ID}
                  </Card.Title>
                  <Card.Text className="underline text">
                    {moment(order.DateTime).date()}/
                    {moment(order.DateTime).month()}/
                    {moment(order.DateTime).year()} at{" "}
                    {moment(order.DateTime).hour()}:
                    {moment(order.DateTime).minute()}:
                    {moment(order.DateTime).second()}
                  </Card.Text>
                  <Card.Text className="text">
                    Note: {order.Order_note}
                  </Card.Text>
                  <button class="button" onClick={handleReady(order.Order_ID)}>
                    Ready
                  </button>
                </Card.Body>
                {itemList.map((itemIndex) => {
                  if (itemIndex.Order_ID === order.Order_ID)
                    return (
                      <div class="row row-cols-1 row-cols-md-3">
                        <Card.Body className="OrderImg">
                          <Card.Img
                            className="OrderImg"
                            src={image}
                            alt="File interupted"
                          />
                          <Card.Text className="maxleng text">
                            {menu[itemIndex.Item_ID - 1].Name}
                          </Card.Text>
                          <Card.Text className="text">
                            Quantity: {itemIndex.Quantity}
                          </Card.Text>
                          <Card.Text className="maxleng text">
                            Note: {itemIndex.Item_Note}
                          </Card.Text>
                        </Card.Body>
                      </div>
                    );
                })}
              </Card>
            );
        })}
      </>
    );
  else if (props.title === "Ready")
    return (
      <>
        {orders.map((order) => {
          if (order.Status === props.title)
            return (
              <Card className="card-group OrderCard" style={{ width: "80rem" }}>
                <Card.Body className="col-md-2">
                  <Card.Title className="OrderName text">
                    # {order.Order_ID}
                  </Card.Title>
                  <Card.Text className="underline text">
                    {moment(order.DateTime).date()}/
                    {moment(order.DateTime).month()}/
                    {moment(order.DateTime).year()} at{" "}
                    {moment(order.DateTime).hour()}:
                    {moment(order.DateTime).minute()}:
                    {moment(order.DateTime).second()}
                  </Card.Text>
                  <Card.Text className="text">
                    Note: {order.Order_note}
                  </Card.Text>
                  <button class="button" onClick={handleFinish(order.Order_ID)}>
                    Finish
                  </button>
                </Card.Body>
                {itemList.map((itemIndex) => {
                  if (itemIndex.Order_ID === order.Order_ID)
                    return (
                      <div class="row row-cols-1 row-cols-md-3">
                        <Card.Body className="OrderImg">
                          <Card.Img
                            className="OrderImg"
                            src={image}
                            alt="File interupted"
                          />
                          <Card.Text className="maxleng text">
                            {menu[itemIndex.Item_ID - 1].Name}
                          </Card.Text>
                          <Card.Text className="text">
                            Quantity: {itemIndex.Quantity}
                          </Card.Text>
                          <Card.Text className="maxleng text">
                            Note: {itemIndex.Item_Note}
                          </Card.Text>
                        </Card.Body>
                      </div>
                    );
                })}
              </Card>
            );
        })}
      </>
    );
  else
    return (
      <>
        {orders.map((order) => {
          if (order.Status === props.title)
            return (
              <Card className="card-group OrderCard" style={{ width: "80rem" }}>
                <Card.Body className="col-md-2">
                  <Card.Title className="OrderName text">
                    # {order.Order_ID}
                  </Card.Title>
                  <Card.Text className="underline text">
                    {moment(order.DateTime).date()}/
                    {moment(order.DateTime).month()}/
                    {moment(order.DateTime).year()} at{" "}
                    {moment(order.DateTime).hour()}:
                    {moment(order.DateTime).minute()}:
                    {moment(order.DateTime).second()}
                  </Card.Text>
                  <Card.Text className="text">
                    Note: {order.Order_note}
                  </Card.Text>
                </Card.Body>
                {itemList.map((itemIndex) => {
                  if (itemIndex.Order_ID === order.Order_ID)
                    return (
                      <div class="row row-cols-1 row-cols-md-3">
                        <Card.Body className="OrderImg">
                          <Card.Img
                            className="OrderImg"
                            src={image}
                            alt="File interupted"
                          />
                          <Card.Text className="maxleng text">
                            {menu[itemIndex.Item_ID - 1].Name}
                          </Card.Text>
                          <Card.Text className="text">
                            Quantity: {itemIndex.Quantity}
                          </Card.Text>
                          <Card.Text className="maxleng text">
                            Note: {itemIndex.Item_Note}
                          </Card.Text>
                        </Card.Body>
                      </div>
                    );
                })}
              </Card>
            );
        })}
      </>
    );
}

export default OrderTag;
