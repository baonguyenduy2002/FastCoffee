import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CreateIcon from '@mui/icons-material/Create';


import "./DrinkItems.css";

import * as api from "../../../controller/data/drinks";
import { COLORS } from "../../../assets/constants";

const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
function DrinkItems(props) {
  const [drinkItems, setDrinkItems] = useState([]);

  useEffect(() => {
    api.getDrinks("api/item/get").then((res) => setDrinkItems(res.data));
  }, []);

    return (
        <>
            {drinkItems.map((item) => {
                return (
                    <Card style={{ width: '18rem' }}>
                        <div className="delete"></div>
                        <CreateIcon className="edit"></CreateIcon>
                        {/* <Card.Img variant="top" src={drinksItemImage.filter(function (el) { return el.id === item.Item_ID })[0].image} alt="File corrupted" /> */}
                        <Card.Body className="DrinkInfo">
                            <Card.Title className="DrinkName">{item.Name}</Card.Title>
                            <Card.Text className="DrinkDescription">
                                {item.Description}
                            </Card.Text>
                            <Button variant="primary">{formatter.format(item.Price)}</Button>
                        </Card.Body>
                    </Card>
                );
            })}

        </>
    )
}

const add_item_style = {
    border: '3px solid ' + COLORS.darkgray,
    color:  COLORS.darkgray,
    borderRadius: '50%',
    height: '60px',
    width: '60px'
};

export default DrinkItems;
