import React, {useState} from "react";

import "./Menu.css";

import { COLORS } from "../../../../assets/constants";

import Example from "../../../../components/MenuCollapsible";
import MenuCollapsible from "../../../../components/MenuCollapsible";



function Menu() {

  const [restaurant, setRestaurant] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const shopImg = require("../../../../assets/image/login_background1.jpg")

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
            <span className="Address">123/45 Đường Lý Thường Kiệt, Quận 10, Thành phố Hồ Chí Minh</span>
          </div>
        </div>
      </div>

      <div className="ShopMenu">
        <div className="MustTry">
          <MenuCollapsible className="MustTry" title="Must try">

          </MenuCollapsible>
          <MenuCollapsible className="BestSellers" title="Best Sellers">
            
          </MenuCollapsible>
          <MenuCollapsible className="NewDrinks" title="New Drinks">
            
          </MenuCollapsible>
          </div>
        sdfasd
        sdfasdf
        sdfasdf
      </div>
    </div>
  );
}


export default Menu;
