import React, { useState } from "react";

import "./Sidebar.css";
import { iconsSideBar } from "../../assets/index";
import SideBarButton from "../SideBarButton";

function SideBar() {
	const [focusedButton, setFocusedButton] = useState("dashboard");
	return (
		<div className="Sidebar">
			{iconsSideBar.map((item) => {
				return (
					<SideBarButton
						key={item.name}
						item={item}
						state={focusedButton}
						setState={setFocusedButton}
					/>
				);
			})}
		</div>
	);
}

export default SideBar;
