import React from 'react'

const RestaurantResult = (props) =>
    <a className="card" href= {props.urlYelp} target='_blank' rel="noopener noreferrer">
        <img className="image" src= {props.urlImage} alt="restaurant"/>
            <div className="card-text-container">
                <h2 id="restaurant-name">{props.name}</h2>
                <div>Status: {props.status}</div>
                <div>See more on Yelp...</div>
            </div>
    </a>


export default RestaurantResult