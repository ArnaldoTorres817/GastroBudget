import React, { useState } from 'react'
import AlgoliaPlaces from 'algolia-places-react'
import './Form.css'
import CheckBoxList from './checkboxlist/CheckBoxList'

//Form Component
const Form = (props) => {
    const { onRequest } = props

    const [categories, setCategories] = useState('')
    const [price, setPrice] = useState(1)
    const [location, setLocation] = useState('')
    const [cuisinesSelected,setCuisinesSelected] = useState(0)
    const [options, setOptions] = useState(
        [
            { name: 'bakeries', labelText: 'Bakeries', value: 'bakeries', checked: false },
            { name: 'breakfast_brunch', labelText: 'Breakfast & Brunch', value: 'breakfast_brunch', checked: false },
            { name: 'buffets', labelText: 'Buffets', value: 'buffets', checked: false },
            { name: 'burgers', labelText: 'Burgers & Sandwiches', value: 'burgers,sandwiches', checked: false },
            { name: 'caribbean', labelText: 'Caribbean', value: 'caribbean', checked: false },
            { name: 'chinese', labelText: 'Chinese', value: 'chinese', checked: false },
            { name: 'coffee', labelText: 'Cafes / Cafeteria', value: 'coffee,cafes,cafeteria', checked: false },
            { name: 'desserts', labelText: 'Desserts', value: 'desserts', checked: false },
            { name: 'diners', labelText: 'Diners', value: 'diners', checked: false },
            { name: 'foodtrucks', labelText: 'Food Truck', value: 'foodtrucks', checked: false },
            { name: 'french', labelText: 'French', value: 'french', checked: false },
            { name: 'gourmet', labelText: 'Gourmet', value: 'gourmet', checked: false },
            { name: 'icecream', labelText: 'Ice Cream & Frozen Yogurt', value: 'icecream', checked: false },
            { name: 'italian', labelText: 'Italian', value: 'italian', checked: false },
            { name: 'japanese', labelText: 'Japanese', value: 'japanese', checked: false },
            { name: 'mexican', labelText: 'Mexican', value: 'mexican', checked: false },
            { name: 'pizza', labelText: 'Pizza', value: 'pizza', checked: false },
            { name: 'seafood', labelText: 'Seafood', value: 'seafood', checked: false },
            { name: 'vegan', labelText: 'Vegan', value: 'vegan', checked: false },
            { name: 'vegetarian', labelText: 'Vegetarian', value: 'vegetarian', checked: false }
        ]
    )

    const isMatched = name => item => {
        if (name === item.name) {
            item.checked = !item.checked
        }
        return item
    }

    const isChecked = item => item.checked

    const updateCategories = () => {
        let updatedCategories = ''
        const categoriesChecked = options.filter(isChecked)
        setCuisinesSelected(categoriesChecked.length)
        categoriesChecked.forEach(item =>
            updatedCategories += item.value + ','
        )
        updatedCategories = updatedCategories.slice(0, updatedCategories.length - 1)
        setCategories(updatedCategories)
    }


    //Number of cuisines
    const numCuisines = options.length


    const handleChange = e => {
        const name = e.target.name
        let updatedOptions = ""
        if (name === "all") {
            if (e.target.checked) {
                updatedOptions = options.map(item => {
                    item.checked = true
                    setCuisinesSelected(numCuisines)
                    return item
                })
            } else {
                updatedOptions = options.map(item => {
                    item.checked = false
                    setCuisinesSelected(0)
                    return item
                })
            }
        }
        else {
            updatedOptions = options.map(isMatched(name)) 
        }
        setOptions(updatedOptions)
        updateCategories()

    }



    const handleSubmit = e => {
        e.preventDefault()
        if (categories === '' || location === '') {
            alert('You cannot leave any field empty.')
            return
        }
        onRequest(categories, price, location)
    }

    return (
        <form id="form" onSubmit={handleSubmit}>
            <label className="form-label" htmlFor="cuisine">Cuisines&nbsp;&nbsp;</label>
            <CheckBoxList
                options={options}
                onChange={handleChange}
                cuisinesSelected={cuisinesSelected} />
            <label className="form-label" htmlFor="budget">Budget</label>
            <select
                value={price}
                name="budget"
                className="form-select"
                id="budget"
                onChange={e => setPrice(e.target.value)}
            >
                <option value={1}>Low($)</option>
                <option value={2}>Medium ($$)</option>
                <option value={3}>High ($$$)</option>
                <option value={4}>Very High ($$$$)</option>
            </select>

            <label className="form-label" htmlFor="location-text">City and State</label>

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
                    setLocation(suggestion.name + ',' + suggestion.country)}

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