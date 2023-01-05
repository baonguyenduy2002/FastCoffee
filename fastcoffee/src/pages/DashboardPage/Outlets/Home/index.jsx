import React, {useState} from "react";

import "./Home.css";

import { COLORS } from "../../../../assets/constants";

import MenuCollapsible from "../../../../components/MenuCollapsible";
import DrinkItems from "../../../../components/MenuCollapsible/DrinkItems";




function Home() {

  const [shopName, setShopName] = useState("N/A");
  const [shopAddress, setAdress] = useState("N/A");
  const shopImg = require("../../../../assets/image/login_background1.jpg")

  return (

    <div className="Home">
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
            <DrinkItems list="mustTry"/>
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


export default Home;
