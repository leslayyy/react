import React from 'react'
import './Work.css'
import IMG1 from '../../assets/Concom12.jpg'
import IMG2 from '../../assets/myportfolio13.png'
import IMG3 from '../../assets/website14.png'
import IMG4 from '../../assets/StudyNet.jpg'




const Work = () => {
  return (
    <section id='work'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container work__container">
        <article className='work__item'>
          <div className="work__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3>CinemaWorld | Website</h3>
          <small>In my 2nd year Second semester ,we are grouped into 5 members 
            and we created and develop a website that is similar to a Netflix 
            Application, this includes movies that you can watch for free and 
            different entertainments videos, it is good for people who loves and 
            addicted in watching movies.</small>
        </article>
        <article className='work__item'>
          <div className="work__item-image">
            <img src={IMG2} alt=""/>
          </div>
          <h3>Food Ordering | Website</h3>
          <small>A non-functional Ordering website</small>
        </article>
        <article className='work__item'>
          <div className="work__item-image">
            <img src={IMG3} alt=""/>
          </div>
          <h3>CITE Fest | Website</h3>
          <small>Website that you can see the pictures of the event in CITE 2022.</small>
        </article>
        <article className='work__item'>
          <div className="work__item-image">
            <img src={IMG4} alt=""/>
          </div>
          <h3>StudyNet | MobileApp</h3>
          <small>In my 2nd year First Semester Journey, we created and develop a 
            Mobile Application entitled StudyNet. By the title StudyNet which
             means Study Networking, this can can help I.T students to review in
              the given subject which is Networking. This Application includes 
              sessions of topics and quizzes for each sessions.</small>
        </article>
      </div>
    </section>
    
    

  )
}

export default Work