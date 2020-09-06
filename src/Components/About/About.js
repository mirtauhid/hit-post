import React from 'react';
import Header from '../Header/Header'
import './About.css'

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="aboutSection">
                <h1>HIT POST social website project</h1>
                <h2>Elements used to develope this site:</h2>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>REACT JS</li>
                    <li>Material UI</li>
                    <li>Axios</li>
                    <li>Font Awesome</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
