import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { isAuth, saveInLocalStorage } from "../utils";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginModel = ({ closeLoginForm }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const data = await axios.post("http://localhost:8080/auth/login", {
				email,
				password,
			});
			saveInLocalStorage(data.data.data);
			closeLoginForm();
			navigate("/dashboard");
		} catch (error) {
			console.log(error.response.data.msg);
			toast.error(error.response.data.msg);
		}
	};

	useEffect(() => {
		isAuth() && navigate("/dashboard");
	}, [navigate]);

	return (
		<div
			className="login-form"
			tabIndex="1"
			autoFocus={true}
			onBlur={closeLoginForm}
		>
			{isAuth() ? navigate("/dashboard") : null}
			<div className="title">Sign In</div>
			<div className="form">
				<form onSubmit={handleSubmit}>
					<div className="input-container">
						<label>Username </label>
						<input
							type="text"
							name="username"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							required
						/>
					</div>
					<div className="input-container">
						<label>Password </label>
						<input
							type="password"
							name="password"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							required
						/>
					</div>
					<div className="button-container">
						<input type="submit" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginModel;
