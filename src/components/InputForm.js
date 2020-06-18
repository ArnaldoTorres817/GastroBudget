import React, { useState } from 'react';
import AlgoliaPlaces from 'algolia-places-react';

const axios = require('axios');

const InputForm = () => {
    const { cuisine, setCuisine } = useState('pizza');
    const { budget, setBudget } = useState(1);
    const { location, setLocation } = useState();

    const searchOnYelpApi = e => {
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
            },
            params: {
                categories: `italian`,
                price: 1,
                location: 'Puerto Rico'
            }
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log('error')
            })
    }

    return (
        <div id="input-form">
            <label htmlFor="cuisine">Cuisine</label>
            <select name="cuisine" id="cuisine" onChange={e => setCuisine(e.target.value)}>
                <option value="pizza">Pizza</option>
                <option value="chinese">Chinese</option>
                <option value="italian">Italian</option>
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
                    console.log(rawAnswer)}
            />
            <div className="flex-break"></div>
            <button type='button' id="search-button" onClick={searchOnYelpApi}>Search</button>
        </div>
    )
};

export default InputForm