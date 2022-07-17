import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { getToken } from '../utils'
import { toast } from 'react-toastify'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const DashBoard = () => {
  const [quizes, setQuizes] = useState([])
  const [quizDetail, setQuizDetail] = useState('')

  const getQuizes = async () => {
    try {
      const config = {
        headers: {
          'login-token': getToken(),
        },
      }
      const res = await axios.get('http://localhost:8080/quiz/own', config)
      setQuizes(res.data.data)
    } catch (e) {
      toast.error(e.message)
    }
  }
  useEffect(() => {
    getQuizes()
  }, [])

  const quizDetails = async (e) => {
    e.preventDefault()
    try {
      const config = {
        headers: {
          'login-token': getToken(),
        },
      }
      const id = e.target.value
      const res = await axios.get(
        `http://localhost:8080/quiz/${id}/responses`,
        config
      )
      console.log('res', res.data.data.quiz.title)
      setQuizDetail(res.data.data)
    } catch (e) {
      toast.error(e.message)
    }
  }

  console.log(quizDetail)

  return (
    <div className='pt-5 pe-5'>
      <div className='row ms-1'>
        <div className='col-md-3'>
          <h1 className='text-center p-4 small-header'>Recent Quizes</h1>
          {quizes.map((quiz) => (
            <div className='card mb-3' key={quiz._id}>
              <div className='card-body'>
                <h5 className='card-title'>
                  <span>{quiz.title}</span>
                  <span className='float-end'>
                    {' '}
                    {quiz.publish ? 'Live' : 'Not Live'}
                  </span>
                </h5>
                <p className='card-text'>{quiz.description}</p>
                <button
                  className='btn-primary btn-outline text-decoration-none'
                  value={quiz._id}
                  onClick={quizDetails}
                >
                  Quiz Statistics
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='col-md-9'>
          <Link
            to='/createquiz'
            className=' btn-primary btn-lg text-decoration-none float-end'
          >
            Create a new Quiz
          </Link>
          <h1 className='text-center p-4 mt-3 small-header'>
            {' '}
            {quizDetail && quizDetail.quiz.title}{' '}
          </h1>
          <div className='card'>
            <div className='card-header'>Quiz Statistics</div>
            <div className='card-body'>
              <div className='d-flex justify-content-md-between'>
                <h5>{quizDetail && quizDetail.quiz.title}</h5>{' '}
                <p>
                  {quizDetail && quizDetail.responses.length + ' Participants'}{' '}
                </p>{' '}
                <h5>
                  {quizDetail &&
                    (quizDetail.quiz.publish ? 'Live' : 'Not Live')}
                </h5>
              </div>
              <p>{quizDetail && quizDetail.quiz.description}</p>
              {quizDetail && (
                <CopyToClipboard
                  text={`http://localhost:3000/quiz/${quizDetail.quiz._id}/author/${quizDetail.quiz.author}`}
                >
                  <button className='btn-seconddary btn-outline text-decoration-none float-end'>Copy Quiz Link</button>
                </CopyToClipboard>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
