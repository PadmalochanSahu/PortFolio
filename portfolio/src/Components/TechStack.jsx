import React from 'react';
import '../Css/TechStack.css';
import html from '../Images/html.png';
import bootstrap from '../Images/bootstrap.png';
import css from '../Images/css.png';
import github2 from '../Images/github2.png';
import js from '../Images/js.png';
import vscode from '../Images/vscode.png';
import react from '../Images/react.png';
import sass from '../Images/sass.png';
import Vector4 from '../Images/Vector4.png';
import Vector1 from '../Images/Vector1.png';
import Vector2 from '../Images/Vector2.png';
import Vector5 from '../Images/Vector5.png';

const TechStack = () => {
  return (
    <div className='techStack'>
        <div className="heading">
            <h1>My Tech Stack</h1>
            <p>Technologies I've been working with recently</p>
        </div>
        <div className="vectors">
            <div className="part-one">
                <img src={html} alt='vector' />
                <img src={bootstrap} alt='vector' />
                <img src={css} alt='vector' />
                <img src={sass} alt='vector' />
                <img src={github2} alt='vector' />
                <img src={js} alt='vector' />
            </div>
            <div className="part-two">
                <img src={vscode} alt='vector' />
                <img src={react} alt='vector' />
                <img src={Vector1} alt='vector' />
                <img src={Vector2} alt='vector' />
                <img src={Vector4} alt='vector' />
                <img src={Vector5} alt='vector' />
            </div>
        </div>
    </div>
  )
}

export default TechStack