import React from 'react'
import './Home.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'



const Home = () => {
  return (
    <header>
      <div className="container home__container" id='home'>
        <h5>Hello! I'm</h5>
        <h1>Lesley Ann Rantayo</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
      

        <div className='me'>
          <img src={ME} alt="me"/>
        </div>

      </div>
    </header>
  )
}

export default Home