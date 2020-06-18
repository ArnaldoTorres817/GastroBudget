import React, { useState } from 'react';
import AlgoliaPlaces from 'algolia-places-react';

const axios = require('axios');

const InputForm = () => {
    const [cuisine, setCuisine] = useState('pizza');
    const [budget, setBudget] = useState(1);
    const [location, setLocation] = useState('United States');

    const searchOnYelpApi = e => {
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
                console.log(res)
                console.log(res.data.businesses)
            })
            .catch((err) => {
                console.log('error')
            })
    }

    return (
        <div id="input-form">
            <label htmlFor="cuisine">Cuisine</label>
            <select name="cuisine" id="cuisine" onChange={e => setCuisine(e.target.value)}>
                <option value='acaibowls'>Acai Bowls</option>
                <option value='bakeries'>Bakeries</option>
                <option value='desserts'>Desserts</option>
                <option value='foodtrucks'>Food Trucks</option>
                <option value='icecream'>Ice Cream & Frozen Yogurt</option>
                <option value='gourmet'>Specialty Food</option>
                <option value='argentine'>Argentine</option>
                <option value='brazilian'>Brazilian</option>
                <option value='breakfast_brunch'>Breakfast & Brunch</option>
                <option value='buffets'>Buffets</option>
                <option value='burgers'> Burgers</option>
                <option value='sandwiches'>Sandwiches</option>
                <option value='cafes'>Cafes</option>
                <option value='cafeteria'>Cafeteria</option>
                <option value='caribbean'>Caribbean</option>
                <option value='chinese'>Chinese</option>
                <option value='cuban'>Cuban</option>
                <option value='delis'>Delis</option>
                <option value='diners'>Diners</option>
                <option value='dinnertheater'>Dinner Theater</option>
                <option value='french'>French</option>
                <option value='greek'>Greek</option>
                <option value='hawaiian'>Hawaiian</option>
                <option value='indpak'>Indian</option>
                <option value='italian'>Italian</option>
                <option value='japanese'>Japanese</option>
                <option value='latin'>Latin American</option>
                <option value='mexican'>Mexican</option>
                <option value='pizza'>Pizza</option>
                <option value='seafood'>Seafood</option>
                <option value='vegan'> Vegan</option>
                <option value='vegetarian'>Vegetarian</option>
            </select>
            <label htmlFor="budget">Budget</label>
            <select name="budget" id="budget" onChange={e => setBudget(e.target.value)}>
                <option value="1">Low ($)</option>
                <option value="2">Medium ($$)</option>
                <option value="3">High ($$$)</option>
                <option value="4">Expensive ($$$$)</option>
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

                 onChange={({ query, rawAnswer, suggestion, suggestionIndex }) =>
                     setLocation(suggestion.name+","+suggestion.administrative)}

                onSuggestions={({ rawAnswer, query, suggestions }) => 
                     setLocation(query)}

            />
            <div className="flex-break"></div>
            <button type='button' id="search-button" onClick={searchOnYelpApi}>Search</button>
        </div>
    )
};

export default InputForm