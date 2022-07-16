import React, { Fragment, useEffect, useState } from 'react'
import { isAuth, logOut } from '../utils'
import { Link } from 'react-router-dom'

const NavBar = ({ handleLogin, handleSignup }) => {
  const [isloggedin, setIsloggedin] = useState(false)
  useEffect(() => {
    if (isAuth()) {
      setIsloggedin(true)
    }
  }, [isloggedin])

  return (
    <div>
      <div className='navbar'>
        <h1>
          <Link to='/' className='header nav-header text-decoration-none'>
            Genesis
          </Link>
        </h1>
        <div className='btn-container'>
          {!isloggedin && (
            <Fragment>
              <button className='btn login-btn' onClick={handleLogin}>
                Login
              </button>
              <button className='btn signup-btn' onClick={handleSignup}>
                Signup
              </button>
            </Fragment>
          )}
          {isloggedin && (
            <button className='btn signup-btn' onClick={logOut}>
              {' '}
              Logout{' '}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
export default NavBar
