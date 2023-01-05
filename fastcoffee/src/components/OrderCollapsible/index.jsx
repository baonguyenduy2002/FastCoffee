import React, { useState, useEffect } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import "./OrderCollapse.css";
import OrderTag from "./OrderTag";

function OrderCollapsible(props) {
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
          <OrderTag title={title} />
        </div>
      </Collapse>
    </>
  );
}

export default OrderCollapsible;
