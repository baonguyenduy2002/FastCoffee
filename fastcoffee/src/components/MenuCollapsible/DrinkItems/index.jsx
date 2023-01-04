import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CreateIcon from "@mui/icons-material/Create";

import "./DrinkItems.css";

import * as api from "../../../controller/data/drinks";
import { COLORS } from "../../../assets/constants";
import EditDialogs from "../../Dialog/Dialog";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const initialValues = {
  id: 1,
  name: "hello cafe",
  description: "good coffee for bruh day",
  price: "15000",
  item_image: "someImg.jpg",
  avalability: 15,
};

const deleteDialog = () => {
  alert("deleting stuff");
};

function DrinkItems(props) {
  const [drinkItems, setDrinkItems] = useState([]);
  const [openAddPopup, setOpenAddPopup] = useState(false);
  const [initialFValues, setValue] = useState(initialValues);

  const editDialog = (initialValues) => {
    return () => {
      setOpenAddPopup(true);
      setValue(initialValues);
    };
  };

  const getItems = async () => {
    try {
      await api.getDrinks().then((res) => {
        res.data ? setDrinkItems(res.data) : setDrinkItems([]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id, data) => {
    try {
      await api.updateDrinks(id, data);
      // await api.getTasks().then((res) => {
      // 	setTaskList(res);
      // });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      {drinkItems.map((item) => {
        const initialValues = {
          id: item.Item_ID,
          name: item.Name,
          description: item.Description,
          price: item.Price,
          item_image: item.item_image,
          avalability: item.Avalability,
        };
        return (
          <div key={item.ID}>
            <Card style={{ width: "18rem" }}>
              <div className="delete" onClick={deleteDialog}></div>
              <CreateIcon
                className="edit"
                fontSize="small"
                onClick={editDialog(initialValues)}
              ></CreateIcon>
              {/* <Card.Img variant="top" src={drinksItemImage.filter(function (el) { return el.id === item.Item_ID })[0].image} alt="File corrupted" /> */}
              <Card.Body className="DrinkInfo">
                <Card.Title className="DrinkName">{item.Name}</Card.Title>
                <Card.Text className="DrinkDescription">
                  {item.Description}
                </Card.Text>
                <Button variant="primary">
                  {formatter.format(item.Price)}
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}

      <Card style={{ width: "18rem" }}>
        <div className="delete" onClick={deleteDialog}></div>
        <CreateIcon
          className="edit"
          fontSize="small"
          onClick={editDialog(initialValues)}
        ></CreateIcon>
        {/* <Card.Img variant="top" src={drinksItemImage.filter(function (el) { return el.id === item.Item_ID })[0].image} alt="File corrupted" /> */}
        <Card.Body className="DrinkInfo">
          <Card.Title className="DrinkName">hello cafe</Card.Title>
          <Card.Text className="DrinkDescription">
            ffffffffsdfsdfasdfasdf
          </Card.Text>
          <Button variant="primary">{formatter.format(15000)}</Button>
        </Card.Body>
      </Card>

      {/* <EditDialogs
                initialValues={initialValues}
                openAddPopup={openAddPopup}
                setOpenAddPopup={setOpenAddPopup}
            /> */}

      <EditDialogs
        initialValues={initialFValues}
        openAddPopup={openAddPopup}
        setOpenAddPopup={setOpenAddPopup}
      />
    </>
  );
}

const add_item_style = {
  border: "3px solid " + COLORS.darkgray,
  color: COLORS.darkgray,
  borderRadius: "50%",
  height: "60px",
  width: "60px",
};

export default DrinkItems;
