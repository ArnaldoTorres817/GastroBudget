import React from 'react'
import './RestaurantItem.css'

const RestaurantItem = (props) => {

    const {
        name,
        image_url,
        location,
        yelp_url
    } = props

    return (
        <a className="card" href={yelp_url} target='_blank' rel="noopener noreferrer">
            {image_url ? <img className="image" src={image_url} alt="Restaurant" /> : null}
            <div className="card-text">
                <span id="restaurant-name">{name}</span>
                <span>Location: {`${location.city}, ${location.state}`}</span>
                <div id='see-more'>
                    <span>See more on</span>&nbsp;
                    <img id='yelp-logo' src={process.env.PUBLIC_URL + '/yelp_logo.png'} alt="yelp-logo" />
                </div>
            </div>
        </a>
    )
}



export default RestaurantItem