import React, { useState } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import './DrinkItems.css';

import { drinkItems } from "../../../controller/data/drinks";
import { drinksItemImage } from "../../../assets";

function DrinkItems(props) {

    const { list } = props;
    const drinkItemsList = drinkItems[list]

    return (
        <>
            {drinkItemsList.map((item) => {
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ drinksItemImage.filter(function(el){return el.id === item.Item_ID })[0].image } alt="File corrupted"/>
                        <Card.Body className="DrinkInfo">
                            <Card.Title className="DrinkName">{ item.Name }</Card.Title>
                            <Card.Text className="DrinkDescription">
                                { item.Description }
                            </Card.Text>
                            <Button variant="primary">{ item.Price }</Button>
                        </Card.Body>
                    </Card>
                );
            })}
        </>
    )
}
export default DrinkItems;