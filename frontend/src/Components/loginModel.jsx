import React from "react";

const LoginModel = ({closeLoginForm , handleSubmit}) => {
	return (
		<div className="login-form" tabIndex="1" autoFocus ={true} onBlur={closeLoginForm}>
			<div className="title">Sign In</div>
			<div className="form">
				<form onSubmit={handleSubmit}>
					<div className="input-container">
						<label>Username </label>
						<input type="text" name="username" required />
					</div>
					<div className="input-container">
						<label>Password </label>
						<input type="password" name="password" required />
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
