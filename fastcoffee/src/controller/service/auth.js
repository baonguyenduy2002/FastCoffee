import { userModel } from "../data/user";

export const login = (userId, password, rememberMe) => {
	const error = {
		message: "Invalid userid or password",
		statusCode: 401,
		statusText: "Unauthorized",
	};

	const storage = rememberMe ? localStorage : sessionStorage;
	try {
		if (userId !== userModel.userId || password !== userModel.password) {
			throw error;
		}

		storage.setItem("isAuthenticated", true);
	} catch (error) {
		console.log(error);
	}
};

export const logout = () => {
	localStorage.removeItem("isAuthenticated");
	sessionStorage.removeItem("isAuthenticated");
};
