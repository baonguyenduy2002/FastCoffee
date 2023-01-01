import React from "react";
import { useNavigate } from "react-router-dom";

import { logout } from "../../../../controller/service/auth";

function Setting() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setTimeout(navigate("/"), 2000);
  };

  return (
    <div className="Setting">
      <button onClick={handleLogout}> Log out </button>
    </div>
  );
}

export default Setting;
