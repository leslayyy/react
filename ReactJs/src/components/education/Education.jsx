import React from 'react'
import './Education.css'
import {FaSchool} from 'react-icons/fa'
import {IoSchoolOutline} from 'react-icons/io5'

const Education = () => {
  return (
    <section id='education'>
      <h5>Get To Know</h5>
      <h2>About My Education</h2>

      <div className="container education__container">
        

        <div className="education__content">
            <div className="education__cards">
              <article className='education__card'>
                <FaSchool className='education__icon'/>
                <h5>School</h5>
                <small>University Of Pangasinan</small>
              </article>
              <article className='education__card'>
                <IoSchoolOutline className='education__icon'/>
                <h5>Undergraduate</h5>
                <small>3rd year college | 2023-2024</small>
              </article>
            </div>
            <p> I am in my 3rd Year taking Bachelor Of Science in Information Technology
              at the Phinma-University of Pangasinan, this school motivates me to Study harder
              because future is a must.
              As a dedicated and motivated IT student, I am excited about the
               opportunity to contribute my skills and knowledge to your esteemed
                organization. Through my coursework and hands-on projects, I have
                 gained valuable experience in various aspects of Information 
                 Technology, including network administration, software
                  development, database management, and system analysis. I 
                  have a deep understanding of programming languages such as
                   [Java/C++/Python], and I am well-versed in web development 
                   technologies like HTML, CSS, and JavaScript.
            </p>
        </div>
      </div>
    </section>
  )
}

export default Education