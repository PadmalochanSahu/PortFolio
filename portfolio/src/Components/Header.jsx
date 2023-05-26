import React from 'react'
import '../Css/Header.css'
import { Link } from 'react-scroll' 
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
            <Link to="/" spy={true} smooth={true} offset={-100} duration={500} className="Link">Home</Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="Link">About</Link>
          </li>
          <li>
            <Link to="techStack" spy={true} smooth={true} offset={-20} duration={500} className="Link">Tech-Stack</Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth={true} offset={-180} duration={500} className="Link">Projects</Link>
          </li>
          <li>
            <Link to="footer" spy={true} smooth={true} offset={-100} duration={500} className="Link">Contacts</Link>
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