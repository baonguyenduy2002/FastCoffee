import React, { useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import "./MenuCollapsible.css";
import DrinkItems from "./DrinkItem";

function MenuCollapsible(props) {
  const { title } = props;
  const ctrAria = title.toString().replace(" ", "") + "-collapsible";
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="collapsible_toggler"
        onClick={() => setOpen(!open)}
        aria-controls={ctrAria}
        aria-expanded={open}
      >
        <div className="content">{title}</div>
      </div>
      <Collapse in={open}>
        <div id={ctrAria} className="collapsible_area">
          <DrinkItems />
        </div>
      </Collapse>
    </>
  );
}

export default MenuCollapsible;
