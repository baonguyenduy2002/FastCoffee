<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, {useState} from "react";
>>>>>>> 7f4d7620b5e670f165aeb34cd79016ea2820ffaa

import "./Menu.css";
import { COLORS } from "../../../../assets/constants";

import Example from "../../../../components/MenuCollapsible";
import MenuCollapsible from "../../../../components/MenuCollapsible";

import MenuCollapsible from "../../../../components/MenuCollapsible";
import DrinkItems from "../../../../components/MenuCollapsible/DrinkItems";

function Menu() {
<<<<<<< HEAD
  const [restaurant, setRestaurant] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const shopImg = require("../../../../assets/image/login_background1.jpg");

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
=======

  const shopImg = require("../../../../assets/image/login_background1.jpg")
  return (

    <div className="Menu">
      <div className="MenuNavigation">
        nav bar stuffs
>>>>>>> 7f4d7620b5e670f165aeb34cd79016ea2820ffaa
      </div>

      <div className="ShopMenu">
        <div className="MustTry">
<<<<<<< HEAD
          <MenuCollapsible
            className="MustTry"
            title="Must try"
          ></MenuCollapsible>
          <MenuCollapsible
            className="BestSellers"
            title="Best Sellers"
          ></MenuCollapsible>
          <MenuCollapsible
            className="NewDrinks"
            title="New Drinks"
          ></MenuCollapsible>
        </div>
        --------------------------------------------------------------------------------
=======
          <MenuCollapsible className="MustTry" title="Must try">
            <DrinkItems list="menu"/>
          </MenuCollapsible>
          <MenuCollapsible className="BestSellers" title="Best Sellers">
            
          </MenuCollapsible>
          <MenuCollapsible className="NewDrinks" title="New Drinks">
            
          </MenuCollapsible>
          </div>
          --------------------------------------------------------------------------------
>>>>>>> 7f4d7620b5e670f165aeb34cd79016ea2820ffaa
      </div>
    </div>
  );
}


export default Menu;
