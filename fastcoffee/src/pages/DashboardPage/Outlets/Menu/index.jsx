import React, {useState} from "react";

import "./Menu.css";

import MenuCollapsible from "../../../../components/MenuCollapsible";
import DrinkItems from "../../../../components/MenuCollapsible/DrinkItems";

function Menu() {

  const shopImg = require("../../../../assets/image/login_background1.jpg")
  return (

    <div className="Menu">
      <div className="MenuNavigation">
        nav bar stuffs
      </div>

      <div className="ShopMenu">
        <div className="MustTry">
          <MenuCollapsible className="MustTry" title="Must try">
            <DrinkItems list="menu"/>
          </MenuCollapsible>
          <MenuCollapsible className="BestSellers" title="Best Sellers">
            
          </MenuCollapsible>
          <MenuCollapsible className="NewDrinks" title="New Drinks">
            
          </MenuCollapsible>
          </div>
          --------------------------------------------------------------------------------
      </div>
    </div>
  );
}


export default Menu;
