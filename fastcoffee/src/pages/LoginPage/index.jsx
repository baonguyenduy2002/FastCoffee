import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import login_background from "../../assets/image/login_background.svg";
import "./LoginPage.css";
import { login } from "../../controller/service/auth";

function LoginPage() {
	const navigate = useNavigate();

	const [userId, setUserId] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	const handleSubmit = async () => {
		login(userId, password, rememberMe);
		setTimeout(navigate("/dashboard"), 2000);
	};

	return (
		<div className="container">
			<h1 className="title">Sign in</h1>
			<p className="normal-text">Sign in and start managing your employee!</p>

			<form className="form">
				<input
					className="form-input"
					placeholder="User ID"
					onChange={(e) => setUserId(e.target.value)}
				/>
				<input
					className="form-input"
					type="password"
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<div className="remember-me">
					<input
						className="form-checkbox"
						type="checkbox"
						onChange={() => setRememberMe(rememberMe ? false : true)}
					/>
					<p className="normal-text">Remember me</p>
				</div>
				<button type="button" className="form-button" onClick={handleSubmit}>
					Login
				</button>
			</form>
			<img
				src={login_background}
				alt="Login Background"
				className="login_background"
			/>
		</div>
	);
}

export default LoginPage;
