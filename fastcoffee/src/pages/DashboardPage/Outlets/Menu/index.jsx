import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import AddIcon from '@mui/icons-material/Add'

import "./Menu.css";
import { COLORS } from "../../../../assets/constants";

import Example from "../../../../components/MenuCollapsible";
import MenuCollapsible from "../../../../components/MenuCollapsible";
import DrinkItems from "../../../../components/MenuCollapsible/DrinkItems";

function Menu() {
  const [restaurant, setRestaurant] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const shopImg = require("../../../../assets/image/login_background1.jpg");

  const add_item_style = {
    border: '3px solid ' + COLORS.darkgray,
    color:  COLORS.darkgray,
    borderRadius: '50%',
    height: '60px',
    width: '60px'
  };

  return (
    <div className="Menu">
      <div className="ShopImage">
        <img src={shopImg} alt="" />
      </div>

      <div className="ShopProfile">
        <div className="ShopInfo">
          <div className="ShopName">The bruh coffee shop</div>
          <div className="ShopLocation">
            <span className="Distance">0.2km - </span>
            <span className="Address">
              123/45 Đường Lý Thường Kiệt, Quận 10, Thành phố Hồ Chí Minh
            </span>
          </div>
        </div>
      </div>

      <div className="ShopMenu">
        <div className="Menu">
          <MenuCollapsible className="Menu" title="Menu">
            <DrinkItems list="mustTry" />
            <div style={{ width: '18rem' }}>
                <Button variant="add-item outline-primary " style={add_item_style}>
                    <AddIcon className="add-icon"/>
                </Button>
            </div>
          </MenuCollapsible>
        </div>
      </div>
    </div>
  );
}

export default Menu;
