import React from "react";
import { Navigate } from "react-router-dom";

function RequireAuth({ children, redirectTo }) {
	if (redirectTo === "/dashboard")
		return localStorage.getItem("isAuthenticated") ||
			sessionStorage.getItem("isAuthenticated") ? (
			<Navigate to={redirectTo} replace={true} />
		) : (
			children
		);

	return !localStorage.getItem("isAuthenticated") &&
		!sessionStorage.getItem("isAuthenticated") ? (
		<Navigate to={redirectTo} replace={true} />
	) : (
		children
	);
}

export default RequireAuth;
