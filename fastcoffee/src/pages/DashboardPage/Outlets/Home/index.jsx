import React, { useState, useEffect } from "react";

import "./Home.css";

import * as apiShop from "../../../../controller/data/shop";
import * as apiDrinks from "../../../../controller/data/drinks"
import { COLORS } from "../../../../assets/constants";

import MenuCollapsible from "../../../../components/MenuCollapsible";
import DrinkItems from "../../../../components/MenuCollapsible/DrinkItems";
import { MenuItems } from "../Menu";

import Cookies from 'universal-cookie';



function Home() {
  const [shopID, setID] = useState(1)
  const [shopName, setShopName] = useState("N/A");
  const [shopAddress, setAddress] = useState("N/A");
  const shopImg = require("../../../../assets/image/login_background1.jpg")
  const [drinkItems, setDrinkItems] = useState([]);

  const getShopData = async () => {
    try {
      // const [firstResponse] = await Promise.all([
      //   apiShop.getShopID(),
      // ])
      // setID(firstResponse.data.id)
      setID(1)
      // await apiShop.getShopData(firstResponse.data.id).then((res) => {
      await apiShop.getShopData(1).then((res) => {
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

  useEffect(() => {
    try {
      setTimeout(apiDrinks.getDrinks().then((res) => {
        res.data ? setDrinkItems(res.data) : setDrinkItems([]);
      }), 1000);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <MenuItems.Provider value={{ shopID: shopID, drinkItems: drinkItems }}>
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
            <MenuCollapsible className="MustTry" title="Must try" >
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
    </MenuItems.Provider>
  );
}


export default Home;
