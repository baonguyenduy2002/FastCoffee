import React, { useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import "./MenuCollapsible.css";
import DrinkItems from "./DrinkItems";

function MenuCollapsible(props) {
  const { children, title } = props;
  const ctrAria = title.toString().replace(" ", "") + "-collapsible";
  const [open, setOpen] = useState(true);

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
          {children}
        </div>
      </Collapse>
    </>
  );
}

export default MenuCollapsible;
