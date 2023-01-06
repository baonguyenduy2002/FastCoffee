import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CreateIcon from "@mui/icons-material/Create";

import "./DrinkItems.css";

import { COLORS } from "../../../assets/constants";
import EditDialogs from "../../Dialog/Dialog";
import { drinksItemImage } from "../../../assets";
import { MenuItems } from "../../../pages/DashboardPage/Outlets/Menu";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const initialValues = {
  id: 1000,
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
  const [openAddPopup, setOpenAddPopup] = useState(false);
  const [initialFValues, setValue] = useState(initialValues);


  const { shopID, drinkItems } = useContext(MenuItems)

  const editDialog = (initialValues) => {
    return () => {
      setOpenAddPopup(true);
      setValue(initialValues);
    };
  };

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
              {props.editable &&
                <>
                  <div className="delete" onClick={deleteDialog}></div>
                  <CreateIcon
                    className="edit"
                    fontSize="large"
                    onClick={editDialog(initialValues)}
                  ></CreateIcon>
                </>
              }
              {/* <Card.Img variant="top" src={drinksItemImage.filter(function (el) { return el.id === item.Item_ID })[0].image} alt="File corrupted" /> */}
              <Card.Img variant="top" src={drinksItemImage[0].image} alt="File corrupted" />
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
        {props.editable &&
          <>
            <div className="delete" onClick={deleteDialog}></div>
            <CreateIcon
              className="edit"
              fontSize="large"
              onClick={editDialog(initialValues)}
            ></CreateIcon>
          </>
        }
        {/* <Card.Img variant="top" src={drinksItemImage.filter(function (el) { return el.id === item.Item_ID })[0].image} alt="File corrupted" /> */}
        <Card.Img variant="top" src={drinksItemImage[0].image} alt="File corrupted" />
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
      {props.editable &&
        <EditDialogs
          initialValues={initialFValues}
          openAddPopup={openAddPopup}
          setOpenAddPopup={setOpenAddPopup}
        />
      }
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
