import React, { useState } from 'react'
import AlgoliaPlaces from 'algolia-places-react'
import './Form.css'

const Form = (props) => {
    const { onRequest } = props

    const [cuisine, setCuisine] = useState('empty')
    const [budget, setBudget] = useState("1")
    const [location, setLocation] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (cuisine === 'empty' || location === '') {
            alert('You cannot leave any field empty.')
            return
        }
        onRequest(cuisine, budget, location)
    }

    return (
        <form id="form" onSubmit={handleSubmit}>
            <label htmlFor="cuisine">Cuisine</label>
            <select
                value={cuisine}
                name="cuisine"
                className="form-select"
                id="cuisine"
                onChange={e => setCuisine(e.target.value)}
            >
                <option value='empty' aria-disabled aria-selected>Select cuisine type</option>
                <option value='bakeries'>Bakeries</option>
                <option value='breakfast_brunch'>Breakfast &amp; Brunch</option>
                <option value='buffets'>Buffets</option>
                <option value='burgers,sandwiches'>Burgers &amp; Sandwiches</option>
                <option value='caribbean'>Caribbean</option>
                <option value='chinese'>Chinese</option>
                <option value='coffee,cafes,cafeteria'>Cafes / Cafeteria</option>
                <option value='desserts'>Desserts</option>
                <option value='diners'>Diners</option>
                <option value='foodtrucks'>Food Trucks</option>
                <option value='french'>French</option>
                <option value='gourmet'>Gourmet</option>
                <option value='icecream'>Ice Cream &amp; Frozen Yogurt</option>
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
                className="form-select"
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
                    type: 'city',
                    useDeviceLocation: false
                }}
                onChange={({ suggestion }) =>
                    setLocation(suggestion.value)}

                onSuggestions={({ query }) =>
                    setLocation(query)}

                onClear={() =>
                    setLocation('')}
            />
            <div className="flex-break"></div>
            <input
                type='submit'
                value='Search'
                id='search-button'
            />
        </form>
    )
}

export default Form