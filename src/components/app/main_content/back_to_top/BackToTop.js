import React, { useState } from 'react'

import './BackToTop.css'

const BackToTop = () => {

    const [display, setDisplay] = useState('none')

    const displayButton = () => {
        const updatedDisplay =
            (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? 'block' : 'none'
        setDisplay(updatedDisplay)
    }

    window.onscroll = () => displayButton()

    const scrollBackToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <button
            type='button'
            className='backtotop'
            title='Go back to top'
            onClick={scrollBackToTop}
            style={{ display }}
        >
            <img
                className='arrow'
                src={`${process.env.PUBLIC_URL}/images/arrow_up.png`}
                alt='Back to top'
            />
        </button>
    )
}


export default BackToTop