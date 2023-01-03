import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import moment from "moment";

import "./OrderTag.css";

import * as api from "../../../controller/data/order";

function OrderTag(props) {
  const { title } = props;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.getOrders("api/order/get").then((res) => setOrders(res.data));
  }, []);

  if (props.title == "Pending")
    return (
      <>
        {orders.map((item) => {
          if (item.Status == props.title)
            return (
              <Card className="OrderCard" style={{ width: "80rem" }}>
                <Card.Body>
                  <Card.Title className="OrderName">
                    # {item.Order_ID}
                  </Card.Title>
                  <Card.Text>
                    {moment(item.DateTime).date()}/
                    {moment(item.DateTime).month()}/
                    {moment(item.DateTime).year()} at{" "}
                    {moment(item.DateTime).hour()}:
                    {moment(item.DateTime).minute()}:
                    {moment(item.DateTime).second()}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
        })}
      </>
    );
  else
    return (
      <>
        {orders.map((item) => {
          if (item.Status == props.title)
            return (
              <Card className="OrderCard" style={{ width: "80rem" }}>
                <Card.Body>
                  <Card.Title className="OrderName">
                    # {item.Order_ID}
                  </Card.Title>
                  <Card.Text>
                    {moment(item.DateTime).date()}/
                    {moment(item.DateTime).month()}/
                    {moment(item.DateTime).year()} at{" "}
                    {moment(item.DateTime).hour()}:
                    {moment(item.DateTime).minute()}:
                    {moment(item.DateTime).second()}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
        })}
      </>
    );
}

export default OrderTag;
