import React, { useState, useEffect } from "react";

import "./Home.css";

import * as api from "../../../../controller/data/shop";
import { COLORS } from "../../../../assets/constants";

import MenuCollapsible from "../../../../components/MenuCollapsible";
import DrinkItems from "../../../../components/MenuCollapsible/DrinkItems";
import { Button } from "@mui/material";


function Home() {
  const [shopID, setID] = useState(null)
  const [shopName, setShopName] = useState("N/A");
  const [shopAddress, setAddress] = useState("N/A");
  const shopImg = require("../../../../assets/image/login_background1.jpg")

  const getShopData= async () => {
    try {
      const [firstResponse] = await Promise.all([
        api.getShopID(),
      ])
      setID(firstResponse.data.id)
      await api.getShopData(firstResponse.data.id).then((res) => {
        res.data.Name ? setShopName(res.data.Name) : setShopName("Dead database")
        res.data.Address ? setAddress(res.data.Address) : setAddress("Dead database")
      })
    } catch (error) {
      console.log(error);
    }
  };

  

  useEffect(() => {
    getShopData();
  }, []);

  return (

    <div className="Home">
      <div className="ShopImage">
        <img src={shopImg} alt="" />
      </div>

      <div className="ShopProfile">
        <div className="ShopInfo">
          <div className="ShopName">{shopName}</div>
          <div className="ShopLocation">
            <span className="Distance">0.2km - </span>
            <span className="Address">{shopAddress}</span>
          </div>
          {/* <button class="button">
            Opdasdsaasdas
          </button> */}
        </div>
      </div>

      <div className="ShopMenu">
        <div className="MustTry">
          <MenuCollapsible className="MustTry" title="Must try">
            <DrinkItems list="mustTry" />
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
