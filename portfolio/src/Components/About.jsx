import React from 'react';
import '../Css/About.css';
import photo from '../Images/self.png';
const About = () => {
  return (
        <div className="about">
          <div className="text">
            <p>
            Hi 👋,<br />
            My Name is <br /><span>Padmalochan Sahu</span><br />
            I build things for web
            </p>
          </div>
          <div className="photo">
            <img src={photo} alt='self' />
          </div>
        </div>
    
  )
}

export default About