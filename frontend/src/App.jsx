import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateQuiz from './Pages/createQuiz'
import Home from './Pages/home'
import Quiz from './Pages/quiz'
import DashBoard from './Pages/dashBoard'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NavBar from './Components/navBar'
import LoginModel from "./Components/loginModel";
import RegisterModel from "./Components/registerModel";
import QuizQuestions from './Components/quizQuestions'

const App = () => {
  const [activeLoginForm, setactiveLoginForm] = useState(false)
  const [activeRegisterForm, setactiveRegisterForm] = useState(false)
  const [errorMessages, setErrorMessages] = useState({})
  const handleLogin = (event) => {
    closeRegisterForm()
    setactiveLoginForm(true)
  }
  const handleSignup = (event) => {
    closeLoginForm()
    setactiveRegisterForm(true)
  }
  const closeLoginForm = (event) => {
    if (
      event === undefined ||
      !event.currentTarget.contains(event.relatedTarget)
    ) {
      setactiveLoginForm(false)
    }
  }
  const closeRegisterForm = (event) => {
    if (
      event === undefined ||
      !event.currentTarget.contains(event.relatedTarget)
    ) {
      setactiveRegisterForm(false)
    }
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
    <BrowserRouter>
    <NavBar handleLogin={handleLogin} handleSignup={handleSignup} />
      <main>
      {activeLoginForm && (
				<LoginModel
					closeLoginForm={closeLoginForm}
					handleSubmit={handleSubmit}
				/>
			)}
			{activeRegisterForm && (
				<RegisterModel
					closeRegisterForm={closeRegisterForm}
					renderErrorMessage={renderErrorMessage}
					hanldeSubmit={handleSubmit}
				/>
			)}
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/createquiz' element={<CreateQuiz />} />
          <Route path='/quizQuestions' element={<QuizQuestions />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
