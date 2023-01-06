import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import AddIcon from '@mui/icons-material/Add'

import "./Menu.css";
import { COLORS } from "../../../../assets/constants";
import * as apiShop from "../../../../controller/data/shop";
import * as apiDrinks from "../../../../controller/data/drinks"

import MenuCollapsible from "../../../../components/MenuCollapsible";
import DrinkItems from "../../../../components/MenuCollapsible/DrinkItems";
import { useEffect } from "react";

export const MenuItems = React.createContext();

function Menu() {
  const [shopID, setID] = useState(1)
  const [shopName, setShopName] = useState("N/A");
  const [shopAddress, setAddress] = useState("N/A");
  const shopImg = require("../../../../assets/image/login_background1.jpg")
  const [drinkItems, setDrinkItems] = useState([]);
  const [renderTrigger, setTrigger] = useState(0)
  

  const getShopData = async () => {
    try {
      const [firstResponse] = await Promise.all([
        apiShop.getShopID(),
      ])
      setID(firstResponse.data.id)
      await apiShop.getShopData(firstResponse.data.id).then((res) => {
        res.data.Name ? setShopName(res.data.Name) : setShopName("Dead database")
        res.data.Address ? setAddress(res.data.Address) : setAddress("Dead database")
      })
    } catch (error) {
      console.log(error);
    }
  };

  const re_render = () => {
    if (renderTrigger === 20)
      setTrigger(0)
    else setTrigger(renderTrigger + 1)
  }

  useEffect(() => {
    getShopData();
  }, []);

  useEffect(() => {
    try {
      apiDrinks.getDrinks().then((res) => {
        res.data ? setDrinkItems(res.data) : setDrinkItems([]);
      });
    } catch (error) {
      console.log(error);
    }
  }, [renderTrigger]);

  const add_item_style = {
    border: '3px solid ' + COLORS.darkgray,
    color: COLORS.darkgray,
    borderRadius: '50%',
    height: '60px',
    width: '60px'
  };

  return (
    <MenuItems.Provider value={{ shopID: shopID, drinkItems: drinkItems, re_render: re_render }}>
      <div className="Menu">
        <div className="ShopImage">
          <img src={shopImg} alt="" />
        </div>

        <div className="ShopProfile">
          <div className="ShopInfo">
            <div className="ShopName">{shopName}</div>
            <div className="ShopLocation">
              <span className="Distance">0.2km - </span>
              <span className="Address">
                {shopAddress}
              </span>
            </div>
          </div>
        </div>

        <div className="ShopMenu">
          <div className="Menu">
            <MenuCollapsible className="Menu" title="Menu">
              <DrinkItems list="mustTry" editable={true} />
              <div style={{ width: '18rem' }}>
                <Button variant="add-item outline-primary " style={add_item_style} onClick={() => { alert("adding drink") }}>
                  <AddIcon className="add-icon" />
                </Button>
              </div>
            </MenuCollapsible>
          </div>
        </div>
      </div>
    </MenuItems.Provider>
  );
}

export default Menu;
