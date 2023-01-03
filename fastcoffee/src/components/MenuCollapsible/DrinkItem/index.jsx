import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./DrinkItem.css";

import * as api from "../../../controller/data/drinks";
import { drinksItemImage } from "../../../assets";

function DrinkItems(props) {
  const [drinkItems, setDrinkItems] = useState([]);

  useEffect(() => {
    api.getDrinks("api/item/get").then((res) => setDrinkItems(res.data));
  }, []);

  return (
    <>
      {drinkItems.map((item) => {
        // const itemImg = require(itemImgName.toString())
        return (
          <Card style={{ width: "18rem" }}>
            {/* <Card.Img
              variant="top"
              src={
                drinksItemImage.filter(function (el) {
                  return el.id === item.Item_ID;
                })[0].image
              }
              alt="File corrupted"
            /> */}
            <Card.Body>
              <Card.Title className="DrinkName">{item.Name}</Card.Title>
              <Card.Text>{item.Description}</Card.Text>
              <Button variant="primary">{item.Price}</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
export default DrinkItems;
