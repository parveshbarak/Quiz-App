import React from 'react'
import NavBar from '../Components/navBar'
import '../Styles/quiz.css'

const Quiz = () => {
  return (
    <div>
      <NavBar />
      <div className='container'>
        <div className='quiz'>
          {/*
        <div className='quizDescription'>
            <h1>Quiz Name</h1>
            <p> Here we will go with the description of the quiz </p>
            <h4>Quiz Instructions</h4>
          </div>
          <div className='startButton'>
            <button type='submit' class='btn-lg btn-primary'>
              Start Quiz
            </button>
          </div>
        */}

          <div className='question'>
            <div className='question-no'>
              <div className='ques-no'>
                <h1>i Question No 1</h1>
              </div>
              <div className='timer'>
                <h1>Timer</h1>
              </div>
            </div>
            <div className='question-name'>
              <h3>Here will go the ques</h3>
            </div>
            <div className='option-req'>
              <p>Please choose one option from below options</p>
            </div>
            <div className='options'>
              <ol className='list-options'>
                <li className='option'>option1</li>
                <li className='option'>option2</li>
                <li className='option'>option3</li>
                <li className='option'>option4</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz
