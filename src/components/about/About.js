import React from 'react'
import './About.css'

import ImageSlider from '../imageSlider/ImageSlider'
const About = () =>
    <section>
        <p className="note">note: if you dont find many results try diffrent budgets</p>
        <hr id="separator" />
        <h2>About Us</h2>
        <div className="text-about">
        <p id="text">
            GastroBudget is a food picker application where you input the 
            cuisine type, budget and location and it searches through the 
            Yelp API to match results based on the input and display them to you in a 
            simple manner.
        </p>
        <p></p>
        <ImageSlider />
        </div>
    </section>

export default About