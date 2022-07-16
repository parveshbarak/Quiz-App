import React from 'react'
import { isAuth } from '../utils'
import { Navigate } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-body p-5'>
      {isAuth() && <Navigate to='/dashboard' />}
      <div className='text-center p-5 pt-5'>
        <h1>
          My favorite thing in the world is a quiz show,
          <br /> 'University Challenge,' so you can see <br></br>what kind of
          sad person I am!
        </h1>
      </div>
    </div>
  )
}
export default Home
