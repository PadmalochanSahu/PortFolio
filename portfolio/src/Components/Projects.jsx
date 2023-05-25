import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Css/Projects.css';


const Projects = (props) => {
  return (
    
        <div className="cards">
           <div className="card">
            <div className="img">
              <img src={props.image}  alt='title'/>
            </div>
            <div className="card-content">
                <h4>{props.name}</h4>
                <p>{props.desc}</p>
                <p><strong>Tech stack :</strong> {props.tech}</p>
                <div className="card-link">
                   <i className="fa-solid fa-link"></i> <NavLink to={props.preview}>Live Preview</NavLink>
                   <i className="fa-brands fa-github"></i> <NavLink to={props.code}>View Code</NavLink>
                </div>
            </div>
           </div>
        </div>

  );
}

export default Projects