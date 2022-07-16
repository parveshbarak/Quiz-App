import React from 'react'


const NavBar = ({handleLogin , handleSignup}) => {
  return (
    <div>
        <div className='navbar'>
            <h1 className='header nav-header'>Genesis</h1>
            <div className='btn-container'>
              <button className='btn login-btn' onClick={handleLogin}>Login</button>
              <button className='btn signup-btn' onClick={handleSignup}>Signup</button>
            </div>
          
        </div>
    </div>
  )
}
export default NavBar