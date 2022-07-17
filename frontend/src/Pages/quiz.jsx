import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { getToken } from '../utils'
import { useNavigate, useParams } from 'react-router-dom'

const Quiz = () => {
  const [name, setName] = useState('')
  const [isQuestions, setIsQuestions] = useState(false)
  const [quizQuestions, setQuizQuestions] = useState([])
  const [quizName, setQuizName] = useState('')
  const [quizResponses, setQuizResponses] = useState([])
  const navigate = useNavigate()
  const params = useParams()

  const startQuiz = async (e) => {
    e.preventDefault()
    setIsQuestions(true)
    try {
      const config = {
        headers: {
          'login-token': getToken(),
        },
      }
      const res = await axios.get(
        `http://localhost:8080/quiz/${id}/author/${authorId}`,
        config
      )
      const username = res.data.data[0].title;
      setQuizName(username)
      setQuizQuestions(res.data.data[0].questions)
      setIsQuestions(true)
      const {id, authorId} = params
      const data = {
        quizId: id,
        username: username,
        "browser": "brave"
      }
      await axios.post(
        `http://localhost:8080/response/register`,
        data,
        config
      )
    } catch (e) {
      toast.error(e.message)
    }
  }

  const submitQuiz = async (e) => {
    e.preventDefault()
    const {id, authorId} = params
    const data = {
      quizId: id,
      username: name,
      response: quizResponses
    }
    try {
      const config = {
        headers: {
          'login-token': getToken(),
        },
      }
      const res = await axios.post(
        'http://localhost:8080/response/submit',
        data,
        config
      )
      toast.success('Response Recorded Successfully!')
      navigate('/home')
    } catch (e) {
      toast.error(e.reponse.data.msg)
    }
  }
  
  const recordResponse = (e) => {
    e.preventDefault()
    
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
              The quizzes consists of questions carefully designed to help you
              self-assess your comprehension of the information presented on the
              topics covered in the module. No data will be collected on the
              website regarding your responses or how many times you take the
              quiz.
            </li>
            <li className='pb-1'>
              If you select an incorrect response for a question, you can try
              again until you get the correct response. If you retake the quiz,
              the questions and their respective responses will be randomized.
            </li>
            <li className='pb-1'>
              After responding to a question, click on the "Next Question"
              button at the bottom to go to the next questino. After responding
              to the 8th question, click on "Close" on the top of the window to
              exit the quiz.
            </li>
            <li className='pb-1'>
              The total score for the quiz is based on your responses to all
              questions. If you respond incorrectly to a question or retake a
              question again and get the correct response, your quiz score will
              reflect it appropriately. However, your quiz will not be graded,
              if you skip a question or exit before responding to all the
              questions.
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
            onClick={startQuiz}
          >
            Start Quiz
          </button>
        </div>
      ) : (
        <div>
          {quizQuestions.map((ques) => (
            <div className='card m-1' key={ques._id}>
              <div className='card-body'>
              <h5>{ques.questionText}</h5>
                <div className='ps-4'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='option'
                      id={ques.options[0].optionId}
                      value={ques.options[0].optionText}
                    />
                    <label
                      className='form-check-label'
                      htmlFor={ques.options[0].optionId}
                    >
                      {ques.options[0].optionText}
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='option'
                      id={ques.options[1].optionId}
                      value={ques.options[1].optionText}
                    />
                    <label
                      className='form-check-label'
                      htmlFor={ques.options[1].optionId}
                    >
                      {ques.options[1].optionText}
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='option'
                      id={ques.options[2].optionId}
                      value={ques.options[2].optionText}
                    />
                    <label
                      className='form-check-label'
                      htmlFor={ques.options[2].optionId}
                    >
                      {ques.options[2].optionText}
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='option'
                      id={ques.options[3].optionText}
                      value={ques.options[3].optionText}
                    />
                    <label
                      className='form-check-label'
                      htmlFor={ques.options[3].optionId}
                    >
                      {ques.options[3].optionText}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            className='btn-lg btn-primary mb-5 float-end mt-3 text-decoration-none'
            onClick={submitQuiz}
          >
            Submit Quiz
          </button>
        </div>
      )}
    </div>
  )
}

export default Quiz
