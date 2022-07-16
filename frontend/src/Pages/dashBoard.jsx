import React from 'react'
import NavBar from '../Components/navBar'

const DashBoard = () => {
  return (
    <div>
      <NavBar />
      <div className='row'>
        <div className='col-md-3 profile-section'>
          <div class='card text-white bg-success mb-3'>
            <div class='card-header'>Parvesh Barak</div>
            <div class='card-body'>
              <h5 class='card-title'>Quizes Created: x</h5>
            </div>
          </div>
        </div>
        <div className='col-md-9 quiz-list-section'>
          <div class='card create-newQuiz-btn'>
            <button type="button" class="btn btn-primary btn-lg">Create  a new Quiz</button>
          </div>
          <h1 className='quiz-list-heading'> Recent Quizes </h1>
          <div class='card quiz-list-card'>
            <div class='card-header'>Quiz-1</div>
            <div class='card-body'>
              <h5>Name of Quiz</h5> <p>X participant</p> <button>View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
