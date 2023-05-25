import React from 'react'
import {NavLink} from 'react-router-dom';
import '../Css/Header.css'
import twitter from '../Images/twitter.png';
import github from '../Images/github.png';
import linkdin from '../Images/linkdin.png';
import Coder from '../Images/coder.png';
const Header = () => {
  return (
         <header>
      <div className="logo">
        <img src={Coder} alt='logo' />
      </div>
      <div className="links">
        <ul>
          <li>
            <NavLink to="home" className="Link">Home</NavLink>
          </li>
          <li>
            <NavLink to="about" className="Link">About</NavLink>
          </li>
          <li>
            <NavLink to="techstack" className="Link">Tech-Stack</NavLink>
          </li>
          <li>
            <NavLink to="projects" className="Link">Projects</NavLink>
          </li>
          <li>
            <NavLink to="contacts" className="Link">Contacts</NavLink>
          </li>
        </ul>
      </div>
      <div className="social-media">
      <img src={github} alt='github' />
      <img src={twitter} alt='twitter' />
      <img src={linkdin} alt='linkdin' />
        
      </div>
    </header>
    
  )
}

export default Header