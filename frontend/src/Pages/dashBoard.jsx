import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { getToken } from '../utils'
import { toast } from 'react-toastify'

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
      const id = e.target.value;
      const res = await axios.get(`http://localhost:8080/quiz/${id}/responses`, config)
      setQuizDetail(res);
    } catch (e) {
      toast.error(e.message)
    }
  }

  return (
    <div className='pt-5 pe-5'>
      <div className='row ms-1'>
        <div className='col-md-3'>
          <h1 className='text-center p-5 small-header'>Recent Quizes</h1>
          {quizes.map((quiz) => (
            <div className='card mb-3' key={quiz._id}>
              <div className='card-body'>
                <h5 className='card-title'>
                  <span>{quiz.title}</span>
                  <span className='float-end'> {quiz.publish ? 'Live' : 'Not Live'}</span>
                </h5>
                <p className='card-text'>{quiz.description}</p>
                <button className='btn-primary btn-outline text-decoration-none' value={quiz._id} onClick={quizDetails}>
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
          <h1 className='text-center p-4 mt-3 small-header'> Quiz Name </h1>
          <div className='card'>
            <div className='card-header'>Quiz-1</div>
            <div className='card-body'>
              <h5>Name of Quiz</h5> <p>X participant</p> <button>View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
