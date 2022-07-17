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


  function fnBrowserDetect () {
    let userAgent = navigator.userAgent;
    let browserName='chrome';
    if (navigator.brave && navigator.brave.isBrave() || false) {
      browserName = 'brave'
    }
    else if (userAgent.match(/chrome|chromium|crios/i)) {
      browserName = 'chrome';
    } else if (userAgent.match(/firefox|fxios/i)) {
      browserName = 'firefox';
    } else if (userAgent.match(/safari/i)) {
      browserName = 'safari';
    } else if (userAgent.match(/opr\//i)) {
      browserName = 'opera';
    }
    return browserName;
  }

  const startQuiz = async (e) => {
    e.preventDefault()
    try {
      const {id, authorId} = params
      const config = {
        headers: {
          'login-token': getToken(),
        },
      }
      const data = {
        quizId: id,
        username: name,
        "browser": fnBrowserDetect()
      }
      const response = await axios.post(
        `http://localhost:8080/response/register`,
        data,
        config
      )
      const res = await axios.get(
        `http://localhost:8080/quiz/${id}/author/${authorId}`,
        config
      )
      const quizname = res.data.data[0].title;
      setQuizName(quizname)
      const quesArray = res.data.data[0].questions
      quesArray.sort(() => Math.random() - 0.5);
      setQuizQuestions(quesArray)
      setIsQuestions(true)
    } catch (e) {
      toast.error(e.response.data.msg)
    }
  }

  const submitQuiz = async (e) => {
    e.preventDefault()
    const {id, authorId} = params
    try {
      const config = {
        headers: {
          'login-token': getToken(),
        },
      }
      const data = {
        quizId: id,
        username: name,
        response: quizResponses
      }
      console.log('data', data)
      const res = await axios.patch(
        'http://localhost:8080/response/submit',
        data,
        config
      )
      console.log('res', res)
      toast.success('Response Recorded Successfully!')
      navigate('/')
    } catch (e) {
      toast.error(e.message)
    }
  }
  
  const recordResponse = (e) => {
    const ans = e.target.value
    const quesId = e.target.name
    console.log(ans, quesId)
    const newResponse = {
      quesId : quesId,
      ans : ans
    }
    setQuizResponses([...quizResponses, newResponse])
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
                <div className='ps-4' onClick={recordResponse}>
                  {ques.options.map(option => (
                    <div className='form-check' id = {ques._id} key = {option._id}>
                    <input
                      className='form-check-input'
                      type='radio'
                      name={ques._id}
                      id={option.optionId}
                      value={option.optionText}
                    />
                    <label
                      className='form-check-label'
                      htmlFor={option.optionId}
                    >
                      {option.optionText}
                    </label>
                  </div>
          ))}
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
