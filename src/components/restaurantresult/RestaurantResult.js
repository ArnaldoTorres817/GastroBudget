import React from 'react'
import './RestaurantResult.css'

const RestaurantResult = (props) =>
    <a className="card" href={props.yelp_url} target='_blank' rel="noopener noreferrer">
        {props.image_url ? <img className="image" src={props.image_url} alt="Restaurant" /> : null}
        <div className="card-text-container">
            <span id="restaurant-name">{props.name}</span>
            <span>Location: {props.location.city + ', ' + props.location.state}</span>
            <span id='see-more'>See more on</span>
            <img id='yelp-logo' src={process.env.PUBLIC_URL + '/yelp_logo.png'} alt="yelp-logo" />
        </div>
    </a>


export default RestaurantResult