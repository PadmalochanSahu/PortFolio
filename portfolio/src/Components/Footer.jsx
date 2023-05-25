import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Css/Footer.css';
import twitter from '../Images/twitter.png';
import github from '../Images/github.png';
import linkdin from '../Images/linkdin.png';
import Coder from '../Images/coder.png';

const Footer = () => {
  return (
   <footer>
    <div className="head">
        <div className="logo">
        <img src={Coder} alt='logo' />
        </div>
        <div className="contact">
            <div className="phn right">
                <p>+91 12345 09876</p>
            </div>
            <div className="email right">
                <p>info@example.com</p>
            </div>
            <div className="social-media right">
               <img src={github} alt='github' />
               <img src={twitter} alt='twitter' />
               <img src={linkdin} alt='linkdin' />
            </div>
        </div>
    </div>
    <hr />
    <div className="foot">
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
      <div className="detail">
        <p>Designed and built by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span></p>
      </div>
    </div>
   </footer>
  )
}

export default Footer