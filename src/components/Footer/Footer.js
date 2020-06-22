import React from 'react'

import './Footer.css'
const Footer = (props) =>
    <footer id="footer-absolute">
        <span className="footer-item">&copy; 2020 Arnaldo M. Torres Rodriguez, Carlos A. Oriol Rivera. All rights reserved.</span>
        <a className="footer-item footer-link" href="https://github.com/Rogue817" target='_blank' rel="noopener noreferrer">Arnaldo's GitHub</a>
        <a className="footer-item footer-link" href="https://github.com/CarlosOriol3" target='_blank' rel="noopener noreferrer">Carlos' GitHub</a>
        <span className="footer-item">Restaurants imformation provided by <img src={process.env.PUBLIC_URL + '/yelp_logo_mini.png'} alt="Yelp"/></span>
    </footer>

export default Footer