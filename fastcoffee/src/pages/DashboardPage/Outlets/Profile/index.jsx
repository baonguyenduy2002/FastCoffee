import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import moment from "moment";

import "./Profile.css";

import license_image from "../../../../assets/image/license.png";
import owner_image from "../../../../assets/image/owner.jpg";
import * as api from "../../../../controller/data/profile";

import { COLORS } from "../../../../assets/constants";

function Home() {
  const [restaurant, setRestaurant] = useState({});
  const [owner, setOwner] = useState({});
  const [currentLocation, setCurrentLocation] = useState(null);
  const shopImg = require("../../../../assets/image/login_background1.jpg");

  useEffect(() => {
    api
      .getShop(`api/shop/get/1`)
      .then((res) =>
        res.data
          ? setRestaurant(res.data)
          : setRestaurant({
              Shop_ID: 1,
              Name: "Loading",
              Address: "Loading",
              Bussiness_license: "Loading",
              Status: "Loading",
              Manager_ID: 1,
              longitude: 0,
              latitude: 0,
              shop_image: null,
            })
      )
      .then(() => {
        restaurant.Manager_ID
          ? api
              .getShopOwner(`api/shop/getowner/${restaurant.Manager_ID}`)
              .then((res) =>
                res.data
                  ? setOwner(res.data)
                  : setOwner({
                      Acc_ID: 1,
                      Password: "",
                      Name: "Loading",
                      Address: "Loading 1A",
                      DoB: "2002-01-19T00:00:00.000Z",
                      Phone_number: "Loading",
                      Email: "Loading",
                    })
              )
          : setOwner({});
      });
  }, [owner]);

  return (
    <div className="Home">
      <div className="ShopImage">
        <img src={shopImg} alt="" />
      </div>

      <div className="ShopProfile">
        <div className="ShopInfo">
          <div className="ShopName">{restaurant.Name}</div>
          <div className="ShopLocation">
            <span className="Distance">0.2km - </span>
            <span className="Address">{restaurant.Address}</span>
          </div>
          <div class="badge">{restaurant.Status}</div>
        </div>
      </div>

      <div class="card-group ShopMenu">
        <div class="card">
          <img src={license_image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Bussiness_license</h5>
            <p class="card-text">License Id: {restaurant.Bussiness_license}</p>
          </div>
        </div>
        <div class="card">
          <img src={owner_image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Manager Infomation</h5>
            <p class="card-text">Name: {owner.Name}</p>
            <p class="card-text">Address: {owner.Address}</p>
            <p class="card-text">
              Date of Birth: {moment(owner.DateTime).date()}/
              {moment(owner.DateTime).month()}/{moment(owner.DateTime).year()}
            </p>
            <p class="card-text">Email: {owner.Email}</p>
            <p class="card-text">Phone number: {owner.Phone_number}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
