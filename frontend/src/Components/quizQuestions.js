import React from 'react'

const QuizQuestions = () => {
  return (
    <div className='container p-5'>
      <div class='card m-1'>
        <div class='card-body'>
          <h5>Q1: What is your name Johny Boii??</h5>
          <div className='ps-4'>
            <div class='form-check'>
              <input
                class='form-check-input'
                type='radio'
                id='option1'
              />
              <label class='form-check-label' for='option1'>
                Gulshan
              </label>
            </div>
            <div class='form-check'>
              <input
                class='form-check-input'
                type='radio'
                id='option2'
              />
              <label class='form-check-label' for='option2'>
                Johny
              </label>
            </div>
            <div class='form-check'>
              <input
                class='form-check-input'
                type='radio'
                id='option3'
              />
              <label class='form-check-label' for='option3'>
                Abhinav
              </label>
            </div>
            <div class='form-check'>
              <input
                class='form-check-input'
                type='radio'
                id='option4'
              />
              <label class='form-check-label' for='option4'>
                POOL4T7
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizQuestions
