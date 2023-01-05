import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import moment from "moment";

import "./OrderTag.css";

import * as api from "../../../controller/data/order";
import image from "../../../assets/image/drink_1.jpg";

function OrderTag(props) {
  const { title } = props;
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
  const [state, updateState] = useState();
  const forceUpdate = () => {
    updateState({});
    console.log("re-render");
  };

  const handleAccept = (id) => {
    return () => {
      api.makeAccepted(`api/order/accept/${id}`);
      forceUpdate();
    };
  };

  const handleDeny = (id) => {
    return () => {
      api.makeNext(`api/order/deny/${id}`);
      forceUpdate();
    };
  };

  const handleProcess = (id) => {
    return () => {
      api.makeNext(`api/order/process/${id}`);
      forceUpdate();
    };
  };

  const handleReady = (id) => {
    return () => {
      api.makeNext(`api/order/ready/${id}`);
      forceUpdate();
    };
  };

  const handleFinish = (id) => {
    return () => {
      api.makeNext(`api/order/finish/${id}`);
      forceUpdate();
    };
  };

  useEffect(() => {
    api
      .getOrders("api/order/get")
      .then((res) => (res.data ? setOrders(res.data) : setOrders([])));
    api
      .getOrders_Items(`api/order/get/order_item`)
      .then((res) => (res.data ? setItemList(res.data) : setItemList([])));
    api.getOrders_Items(`api/item/get/`).then((res) =>
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
          ])
    );

    api.getOrders("api/order/get").then((res) => {
      res.data ? setOrders(res.data) : setOrders([]);
    });
  }, []);

  if (props.title === "Pending")
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
                  if (itemIndex.Order_ID == order.Order_ID)
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
  else if (props.title == "Accepted")
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
                  if (itemIndex.Order_ID == order.Order_ID)
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
  else if (props.title == "Processing")
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
                  if (itemIndex.Order_ID == order.Order_ID)
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
  else if (props.title == "Ready")
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
                  if (itemIndex.Order_ID == order.Order_ID)
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
                  if (itemIndex.Order_ID == order.Order_ID)
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
