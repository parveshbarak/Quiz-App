import React, { useState } from 'react'
import axios from 'axios'
import { getToken } from '../utils'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const CreateQuiz = () => {
  const [qNO, setQNO] = useState(0)
  const [title, setTitle] = useState()
  const [description, setDescription] = useState('')
  const [startTime, setstartDate] = useState('')
  const [endTime, setendDate] = useState('')
  const [ques, setQues] = useState([])
  const [quesText, setQuesText] = useState('')
  const [option1, setOption1] = useState('')
  const [option2, setOption2] = useState('')
  const [option3, setOption3] = useState('')
  const [option4, setOption4] = useState('')
  const [option5, setOption5] = useState('')
  const navigate = useNavigate()
  const addHandler = (e) => {
    e.preventDefault()
    const questions = {
      questionText: quesText,
      options: [
        { optionId: 'op1', optionText: option1 },
        { optionId: 'op2', optionText: option2 },
        { optionId: 'op3', optionText: option3 },
        { optionId: 'op4', optionText: option4 },
      ],
      correctans: option5,
    }
    setQues([...ques, questions])
    setQuesText('')
    setOption1('')
    setOption2('')
    setOption3('')
    setOption4('')
    setOption5('')
    toast.success('Question added')
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    addHandler(e)
    const data = {
      title,
      description,
      startTime: new Date(startTime).toISOString(),
      endTime: new Date(endTime).toISOString(),
      questions: ques,
    }
    try {
      const config = {
        headers: {
          'login-token': getToken(),
        },
      }
      const res = await axios.post(
        'http://localhost:8080/quiz/create',
        data,
        config
      )
      toast.success('Quiz published')
      navigate('/dashboard')
    } catch (e) {
      toast.error(e.message)
    }
  }

  return (
    <React.Fragment>
      <div className='container p-5'>
        {qNO === 0 ? (
          <div className='row justify-content-md-center quiz'>
            <h2 className='text-center mb-5'>Create Quiz</h2>
            <div className='col-md-6'>
              <form>
                <div className='form-group  mb-3'>
                  <label htmlFor='quizTitle' className='mb-2'>
                    Quiz Title
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='quizTitle'
                    placeholder='Quiz Title'
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className='form-group  mb-3'>
                  <label htmlFor='quizDescription' className='mb-2'>
                    Description
                  </label>
                  <textarea
                    type='text'
                    className='form-control'
                    id='quizDescription'
                    placeholder='Quiz Description'
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className='row  mb-3'>
                  <div className='form-group col-md-6'>
                    <label htmlFor='startTime' className='mb-2'>
                      Start Time
                    </label>
                    <input
                      type='datetime-local'
                      className='form-control'
                      id='startTime'
                      onChange={(e) => setstartDate(e.target.value)}
                    />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor='endTime' className='mb-2'>
                      End Time
                    </label>
                    <input
                      type='datetime-local'
                      className='form-control'
                      id='endTime'
                      onChange={(e) => setendDate(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  className='btn btn-outline-primary float-end'
                  onClick={() => {
                    setQNO(1)
                  }}
                >
                  Next
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className='row justify-content-md-center quiz'>
            <h2 className='text-center mb-5'>Add Question {ques.length + 1}</h2>
            <div className='col-md-6'>
              <form>
                <div className='form-group  mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    id='ques'
                    placeholder='Question'
                    value={quesText}
                    onChange={(e) => setQuesText(e.target.value)}
                  />
                </div>
                <div className='form-group mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    id='option1'
                    placeholder='Option 1'
                    value={option1}
                    onChange={(e) => setOption1(e.target.value)}
                  />
                </div>
                <div className='form-group mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    id='option2'
                    placeholder='Option 2'
                    value={option2}
                    onChange={(e) => setOption2(e.target.value)}
                  />
                </div>
                <div className='form-group mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    id='option3'
                    placeholder='Option 3'
                    value={option3}
                    onChange={(e) => setOption3(e.target.value)}
                  />
                </div>
                <div className='form-group mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    id='option4'
                    placeholder='Option 4'
                    value={option4}
                    onChange={(e) => setOption4(e.target.value)}
                  />
                </div>
                <label htmlFor='select-ans'>Select Correct Answer</label>
                <select
                  className='form-select mb-3'
                  aria-label='Default select example'
                  value={option5}
                  id = 'select-ans'
                  onChange={(e) => setOption5(e.target.value)}
                >
                  <option value='option1'>{option1}</option>
                  <option value='option2'>{option2}</option>
                  <option value='option3'>{option3}</option>
                  <option value='option4'>{option4}</option>
                </select>
                <button
                  type='submit'
                  className='btn btn-outline-success'
                  onClick={addHandler}
                >
                  Add
                </button>
                <button
                  type='submit'
                  className='btn btn-outline-primary float-end'
                  onClick={submitHandler}
                >
                  Publish
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

export default CreateQuiz
