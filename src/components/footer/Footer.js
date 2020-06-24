import React from 'react'

import './Footer.css'
const Footer = () =>
    <footer>
        <span className="footer-item">&copy; 2020 Arnaldo M. Torres Rodriguez, Carlos A. Oriol Rivera. All rights reserved.</span>
        <span className="footer-item"><a className="footer-link" href="https://github.com/Rogue817" target='_blank' rel="noopener noreferrer">Arnaldo's GitHub</a></span>
        <span className="footer-item"><a className="footer-link" href="https://github.com/CarlosOriol3" target='_blank' rel="noopener noreferrer">Carlos' GitHub</a></span>
        <span className="footer-item">Restaurants information provided by&nbsp;&nbsp;<a href="https://www.yelp.com/" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/yelp_logo.png'} alt="Yelp" /></a></span>
    </footer>

export default Footer