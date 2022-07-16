import React from 'react'
import NavBar from '../Components/navBar'

const CreateQuiz = () => {
  return (
    <div>
    <NavBar/>
      <div className='container'>
        <form>
          <div class='form-group'>
            <label for='quizTitle'>Quiz Title</label>
            <input
              type='text'
              class='form-control'
              id='quizTitle'
              placeholder='Quiz Title'
            />
          </div>
          <div class='form-group'>
            <label for='quizDescription'>Quiz Description</label>
            <input
              type='text'
              class='form-control'
              id='quizDescription'
              placeholder='Quiz Description'
            />
          </div>
          <div className='addQuestions'>
            <div className='row'>
                <div className='col-md-6'>
                    Left Pannel
                </div>
                <div className='col-md-6'>
                    Right Pannel
                </div>
            </div>
          </div>
          <button type='submit' class='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateQuiz
