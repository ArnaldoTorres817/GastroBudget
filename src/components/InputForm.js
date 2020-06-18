import React from 'react'
import AlgoliaPlaces from 'algolia-places-react';


const InputForm = () =>
    <form id="input-form">
        <label htmlFor="cuisine">Cuisine</label>
        <select name="cuisine" id="cuisine">
            <option value="pizza">Pizza</option>
            <option value="chinese">Chinese</option>
            <option value="italian">Italian</option>
        </select>
        <label htmlFor="budget">Budget</label>
        <select name="budget" id="budget">
            <option value="$">Low</option>
            <option value="$$">Medium</option>
            <option value="$$$">High</option>
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
                console.log('Fired when suggestion selected in the dropdown or hint was validated.')}

            onSuggestions={({ rawAnswer, query, suggestions }) =>
                console.log('Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed.')}

            onCursorChanged={({ rawAnswer, query, suggestion, suggestonIndex }) =>
                console.log('Fired when arrows keys are used to navigate suggestions.')}

            onClear={() =>
                console.log('Fired when the input is cleared.')}

            onLimit={({ message }) =>
                console.log('Fired when you reached your current rate limit.')}

            onError={({ message }) =>
                console.log('Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit.')}
        />
        <div className="flex-break"></div>
        <input type="submit" id="search-button" value="Search" />
    </form>

export default InputForm