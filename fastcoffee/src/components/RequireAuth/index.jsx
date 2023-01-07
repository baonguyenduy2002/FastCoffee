import React from "react";
import { Navigate } from "react-router-dom";

// import { key } from "../../controller/data/user";

import { cookies } from "../../controller/service/auth";


function RequireAuth({ children, redirectTo }) {
	if (redirectTo === "/dashboard")
		return cookies.get('token') ? (
			<Navigate to={redirectTo} replace={true} />
		) : (
			children
		);
	return !cookies.get('token') ? (
		<Navigate to={redirectTo} replace={true} />
	) : (
		children
	);
}

export default RequireAuth;
