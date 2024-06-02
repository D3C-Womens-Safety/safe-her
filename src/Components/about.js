import React from 'react';
import '../App.css';
import '../Styles/about.css';

export const About = () => {
    return (
        <div>
            <div className="landing-intro"> 
                <h1>safeHER</h1>
                <h4>
                    A  world where women can thrive
                </h4>
            </div>

            <div className="landing-pink-divider">
            </div>

            <div className="landing-community">
                <h4>we strive to create a</h4>
                <h1><u>♡ community...</u></h1>
            </div>

            <div className="container-description">
                <h2>that cultivates an inclusive sanctuary</h2>
            </div>
            <div className="pink-landing-container">
                <div className="pink-rect-text">
                    <h2>Resouces</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida felis at mi scelerisque, ac eleifend lacus consequat. Nulla facilisi.
                    </p>
                    <btn className="rect-button">Learn More</btn>
                </div>

                <div className="pink-rect-image">
                </div>
            </div>

            <div className="container-description">
                <h2>where women can freely share their creativity</h2>
            </div>
            <div className="purple-landing-container">
                <div className="purple-rect-image">
                </div>

                <div className="purple-rect-text">
                    <h2>Art Board</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida felis at mi scelerisque, ac eleifend lacus consequat. Nulla facilisi.
                    </p>
                    <btn className="rect-button">Learn More</btn>
                </div>
            </div>

            <div className="container-description">
                <h2>and amplify their voices</h2>
            </div>
            <div className="red-landing-container">
                <div className="red-rect-text">
                    <h2>Blog</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida felis at mi scelerisque, ac eleifend lacus consequat. Nulla facilisi.
                    </p>
                    <btn className="rect-button">Learn More</btn>
                </div>

                <div className="red-rect-image">
                </div>
            </div>

            <div className="container-description">
                <h2>and feel heard.</h2>
            </div>
            <div className="green-landing-container">
                <div className="green-rect-image">
                </div>

                <div className="green-rect-text">
                    <h2>Rant Bot</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida felis at mi scelerisque, ac eleifend lacus consequat. Nulla facilisi.
                    </p>
                    <btn className="rect-button">Learn More</btn>
                </div>
            </div>

            

        </div>
    )
}