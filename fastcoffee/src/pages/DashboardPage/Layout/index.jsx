import React from "react";
import { Outlet } from "react-router-dom";

import "./style.css";
import Sidebar from "../../../components/SideBar";

function Layout() {
	return (
		<div className="layout">
			<Sidebar />
			<section className="outlet">
				<Outlet />
			</section>
		</div>
	);
}

export default Layout;
