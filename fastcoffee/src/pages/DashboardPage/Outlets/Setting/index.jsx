import React from "react";
import { useNavigate } from "react-router-dom";

import { logout } from "../../../../controller/service/auth";

function Setting() {
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="Setting">
      <button onClick={handleLogout}> Log out </button>
    </div>
  );
}

export default Setting;
