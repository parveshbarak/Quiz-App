import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { saveInLocalStorage } from "../utils";
import { toast } from "react-toastify";

const RegisterModel = ({ closeRegisterForm, renderErrorMessage }) => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const data = await axios.post("http://localhost:8080/auth/register", {
				name,
				email,
				password,
			});
			saveInLocalStorage(data.data.data);
			closeRegisterForm();
			window.location.reload();
		} catch (error) {
			toast.error(error.response.data.msg);
		}
	};

	return (
		<div
			className="signUp-form"
			tabIndex="1"
			autoFocus={true}
			onBlur={closeRegisterForm}
		>
			<div className="title">Sign Up</div>
			<div className="form">
				<form onSubmit={handleSubmit}>
					<div className="input-container">
						<label>Name </label>
						<input
							type="text"
							name="name"
							onChange={(e) => {
								setName(e.target.value);
							}}
							required
						/>
						{renderErrorMessage("name")}
					</div>
					<div className="input-container">
						<label>Email </label>
						<input
							type="email"
							name="email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							required
						/>
						{renderErrorMessage("email")}
					</div>
					<div className="input-container">
						<label>Password </label>
						<input
							type="password"
							name="pass"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							required
						/>
						{renderErrorMessage("pass")}
					</div>
					<div className="button-container">
						<input type="submit" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegisterModel;
