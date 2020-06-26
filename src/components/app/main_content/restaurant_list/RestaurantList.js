import React from 'react'
import './RestaurantList.css'
import RestaurantItem from './restaurant_item/RestaurantItem'

const RestaurantList = (props) => {
    const { restaurants } = props
    return (
        <div className='list'>
            {restaurants ?
                restaurants.map((restaurant) =>
                    <RestaurantItem
                        key={restaurant.id}
                        name={restaurant.name}
                        image_url={restaurant.image_url}
                        location={restaurant.location}
                        yelp_url={restaurant.url}
                    />
                ) :
                null
            }
            <span className='note'>*Note: Try using other values of budget or be more specific with cuisine types for more restaurant results.</span>
        </div>
    )
}

export default RestaurantList