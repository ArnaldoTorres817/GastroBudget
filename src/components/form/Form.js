import React, { useState } from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import RestaurantResult from '../restaurantresult/RestaurantResult';
import LoadingAnimation from '../loadinganimation/LoadingAnimation'
import './Form.css'

const axios = require('axios');

const Form = () => {
    const [cuisine, setCuisine] = useState('empty');
    const [budget, setBudget] = useState(1);
    const [location, setLocation] = useState('');
    const [restaurantList, setRestaurantList] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (cuisine.match('empty') || location == null) {
            alert('You cannot leave any field empty.');
            return;
        }
        makeRequest();
    }

    const makeRequest = () => {
        setLoading(true)
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
            },
            params: {
                categories: cuisine,
                price: budget,
                location: location
            }
        })
            .then((res) => {
                setRestaurantList(res.data.businesses)
            })
            .catch((err) => {
                console.log('error')
            })
            .then(() => {
                setLoading(false)
            })
    }

    return (
        <div>
            <form id="form" onSubmit={handleSubmit}>
                <label htmlFor="cuisine">Cuisine</label>
                <select
                    value={cuisine}
                    name="cuisine"
                    id="cuisine"
                    onChange={e => setCuisine(e.target.value)}
                >
                    <option value='empty' aria-disabled aria-selected>Select your cuisine type</option>
                    <option value='bakeries'>Bakeries</option>
                    <option value='desserts'>Desserts</option>
                    <option value='foodtrucks'>Food Trucks</option>
                    <option value='icecream'>Ice Cream &amp; Frozen Yogurt</option>
                    <option value='gourmet'>Gourmet</option>
                    <option value='breakfast_brunch'>Breakfast &amp; Brunch</option>
                    <option value='buffets'>Buffets</option>
                    <option value='burgers,sandwiches'>Burgers &amp; Sandwiches</option>
                    <option value='coffee,cafes,cafeteria'>Cafes / Cafeteria</option>
                    <option value='caribbean'>Caribbean</option>
                    <option value='chinese'>Chinese</option>
                    <option value='diners'>Diners</option>
                    <option value='french'>French</option>
                    <option value='italian'>Italian</option>
                    <option value='japanese'>Japanese</option>
                    <option value='mexican'>Mexican</option>
                    <option value='pizza'>Pizza</option>
                    <option value='seafood'>Seafood</option>
                    <option value='vegan,vegetarian'>Vegan / Vegetarian</option>
                </select>
                <label htmlFor="budget">Budget</label>
                <select
                    value={budget}
                    name="budget"
                    id="budget"
                    onChange={e => setBudget(e.target.value)}
                >
                    <option value="1" aria-selected>Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                    <option value="4">Very High</option>
                </select>

                <label htmlFor="location-text">Location</label>

                <AlgoliaPlaces
                    placeholder='Write an address here'

                    options={{
                        appId: process.env.REACT_APP_ALGOLIA_ID,
                        apiKey: process.env.REACT_APP_ALGOLIA_API_KEY,
                        language: 'en',
                        countries: ['us', 'pr'],
                        type: 'city'
                    }}

                    onChange={({ suggestion }) =>
                        setLocation(suggestion.name + "," + suggestion.administrative)}

                    onSuggestions={({ query }) =>
                        setLocation(query)}
                />
                <div className="flex-break"></div>
                <input
                    type='submit'
                    value='Search'
                    id='search-button'
                />
            </form>
            {isLoading ? <LoadingAnimation /> : null}
            {(restaurantList) ?
                restaurantList.map((restaurant) =>
                    <RestaurantResult
                        yelp_url={restaurant.url}
                        image_url={restaurant.image_url}
                        name={restaurant.name}
                        location={restaurant.location}
                        key={restaurant.id}
                    />
                ) : null
            }
        </div>
    )
};

export default Form