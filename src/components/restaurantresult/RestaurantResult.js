import React from 'react'
import './RestaurantResult.css'

const RestaurantResult = (props) =>
    <a className="card" href={props.urlYelp} target='_blank' rel="noopener noreferrer">
        {props.urlImage ? <img className="image" src={props.urlImage} alt="restaurant" /> : null}
        <div className="card-text-container">
            <div id="restaurant-name">{props.name}</div>
            <div>Status: {props.status}</div>
            <div id="yelp-message"><span id='see-more'>See more on</span><img src={process.env.PUBLIC_URL + '/yelp_logo_mini.png'} alt="yelp-logo" /></div>
        </div>
    </a>


export default RestaurantResult