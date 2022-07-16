import React from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div>
            <div className='home-body'>
                <h1 class="home-inCenter">My favorite thing in the world is a quiz show,<br/> 'University Challenge,' so you can see <br></br>what kind of sad person I am!</h1>
            </div>
        </div>
    </div>
  )
}

export default Home