import React from 'react'

import InputForm from './InputForm'
import AboutUs from './AboutUs'

const MainContent = () =>
    <main>
        <h2>Pick your food based on your budget.</h2>
        <InputForm />
        <section>
            <AboutUs />
        </section>
    </main>
export default MainContent