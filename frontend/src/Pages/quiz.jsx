import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { getToken } from '../utils'
import { useNavigate } from 'react-router-dom'

const Quiz = () => {
  const [name, setName] = useState('')
  const [isQuestions, setIsQuestions] = useState(false)
  const [quizQuestions, setQuizQuestions] = useState('')
  const navigate = useNavigate()

  const startQuiz = async (e) => {
    e.preventDefault()
    setIsQuestions(true)
    try {
      const config = {
        headers: {
          'login-token': getToken(),
        },
      }
      const res = await axios.get('http://localhost:8080/quiz/', config)
      setQuizQuestions(res.data.data)
      navigate('/quizQuestions')
    } catch (e) {
      toast.error(e.message)
    }
  }

  return (
    <div className='container p-5'>
      {!isQuestions ? (
        <div>
          <h1 className='text-center'>Quiz Name</h1>
          <h5 className='p-3 blockquote'>
            {' '}
            Here We will show the description of the quiz
          </h5>
          <h3> {'>'} Instructions</h3>
          <ul className='p-3'>
            <li className='pb-1'>
              Here we will go with the important instructions of the Quiz
            </li>
            <li className='pb-1'>
              Here we will go with the important instructions of the Quiz
            </li>
            <li className='pb-1'>
              Here we will go with the important instructions of the Quiz
            </li>
            <li className='pb-1'>
              Here we will go with the important instructions of the Quiz
            </li>
            <li className='pb-1'>
              Here we will go with the important instructions of the Quiz
            </li>
            <li className='pb-1'>
              Here we will go with the important instructions of the Quiz
            </li>
            <li className='pb-1'>
              Here we will go with the important instructions of the Quiz
            </li>
            <li className='pb-1'>
              Here we will go with the important instructions of the Quiz
            </li>
            <li className='pb-1'>
              Here we will go with the important instructions of the Quiz
            </li>
          </ul>
          <div className='form-group mb-3 col-md-6'>
            <input
              type='text'
              className='form-control'
              id='name'
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <button
            className='btn-lg btn-primary mb-5 float-end mt-3 text-decoration-none'
            onclick={startQuiz}
          >
            Start Quiz
          </button>
        </div>
      ) : (
        
        <div class='card m-1'>
          <div class='card-body'>
            <h5>Q1: What is your name Johny Boii??</h5>
            <div className='ps-4'>
              <div class='form-check'>
                <input class='form-check-input' type='radio' id='option1' />
                <label class='form-check-label' for='option1'>
                  Gulshan
                </label>
              </div>
              <div class='form-check'>
                <input class='form-check-input' type='radio' id='option2' />
                <label class='form-check-label' for='option2'>
                  Johny
                </label>
              </div>
              <div class='form-check'>
                <input class='form-check-input' type='radio' id='option3' />
                <label class='form-check-label' for='option3'>
                  Abhinav
                </label>
              </div>
              <div class='form-check'>
                <input class='form-check-input' type='radio' id='option4' />
                <label class='form-check-label' for='option4'>
                  POOL4T7
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Quiz
