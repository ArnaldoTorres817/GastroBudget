import React, { useState } from 'react'

import './MainContent.css'
import Form from './form/Form'
import About from './about/About'
import RestaurantList from './restaurantList/RestaurantList'
import LoadingAnimation from './loadingAnimation/LoadingAnimation'


const axios = require('axios')

const MainContent = () => {
    const [
        restaurants,
        setRestaurants
    ] = useState()

    const [
        loading,
        setLoading
    ] = useState(false)

    const onRequest = (cuisine, budget, location,) => {
        setLoading(true)
        axios
            .get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
                },
                params: {
                    categories: cuisine,
                    price: budget,
                    location
                }
            })
            .then((res) => {
                const restaurantList = res.data.businesses
                console.log(restaurantList)
                setRestaurants(restaurantList)
            })
            .catch((err) => {
                console.log('error')
            })
            .then(() => {
                setLoading(false)
            })
    }

    return (
        <main>
            <h2>Pick your food based on your budget.</h2>
            <Form
                onRequest={onRequest}
            />
            {loading ? <LoadingAnimation /> : null}
            <RestaurantList restaurants={restaurants} />
            <About />
        </main>
    )
}

export default MainContent