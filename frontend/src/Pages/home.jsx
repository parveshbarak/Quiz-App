import React, { useState } from "react";
import NavBar from "../Components/navBar";
import LoginModel from "../Components/loginModel";
import RegisterModel from "../Components/registerModel";

const Home = () => {
	const [activeLoginForm, setactiveLoginForm] = useState(false);
  const [activeRegisterForm, setactiveRegisterForm] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
	const handleLogin = (event) => {
    closeRegisterForm();
		setactiveLoginForm(true);
	};
  const handleSignup = (event) => {
    closeLoginForm();
		setactiveRegisterForm(true);
	};
  const closeLoginForm = (event)=>{
    setactiveLoginForm(false);
  }
  const closeRegisterForm = (event)=>{
    setactiveRegisterForm(false);
  }
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(event.target);
  };


	return (
		<React.Fragment>
			<NavBar handleLogin ={handleLogin}  handleSignup={handleSignup}  />
            <div className='container-home'>
                <h1 className="header-home">My favorite thing in the world is a quiz show,<br/> 'University Challenge,' so you can see <br></br>what kind of sad person I am!</h1>
            </div>
           
        {activeLoginForm && <LoginModel closeLoginForm ={closeLoginForm} handleSubmit = {handleSubmit} /> }
        {activeRegisterForm && <RegisterModel closeRegisterForm ={closeRegisterForm} renderErrorMessage= {renderErrorMessage} hanldeSubmit ={handleSubmit} /> }
		</React.Fragment>
	);
};
export default Home;
