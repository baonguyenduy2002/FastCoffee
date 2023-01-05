import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import AddIcon from '@mui/icons-material/Add'

import "./Menu.css";
import { COLORS } from "../../../../assets/constants";
import * as api from "../../../../controller/data/shop";

import MenuCollapsible from "../../../../components/MenuCollapsible";
import DrinkItems from "../../../../components/MenuCollapsible/DrinkItems";
import { useEffect } from "react";

function Menu() {
  const [shopID, setID] = useState(null)
  const [shopName, setShopName] = useState("N/A");
  const [shopAddress, setAdress] = useState("N/A");
  const shopImg = require("../../../../assets/image/login_background1.jpg")

  const getShopInfo = async () => {
    return async () => {
      try {
        await api
          .getShopID()
          .then((res) => {
            setID(res.data.id)
          })
        await api
          .getShopData(shopID)
          .then((res) => {
            setShopName(res.data.Name)
            setAdress(res.data.Address)
          })
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getShopInfo();
  }, []);

  const add_item_style = {
    border: '3px solid ' + COLORS.darkgray,
    color: COLORS.darkgray,
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
            <DrinkItems list="mustTry" />
            <div style={{ width: '18rem' }}>
              <Button variant="add-item outline-primary " style={add_item_style} onClick={() => { alert("adding drink") }}>
                <AddIcon className="add-icon" />
              </Button>
            </div>
          </MenuCollapsible>
        </div>
      </div>
    </div>
  );
}

export default Menu;
