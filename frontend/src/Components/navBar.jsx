import React, { Fragment } from 'react'
import { isAuth, logOut } from '../utils'
import { Link } from 'react-router-dom'

const NavBar = ({ handleLogin, handleSignup }) => {
  return (
    <div>
      <div className='navbar'>
        <h1>
          <Link to='/' className='header nav-header text-decoration-none'>
            Genesis
          </Link>
        </h1>
        <div className='btn-container'>
          {!isAuth() && (
            <Fragment>
              <button className='btn login-btn' onClick={handleLogin}>
                Login
              </button>
              <button className='btn signup-btn' onClick={handleSignup}>
                Signup
              </button>
            </Fragment>
          )}
          {isAuth() && (
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
