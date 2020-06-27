import React, { useState, useRef, useEffect } from 'react'
import './CheckBoxList.css'


const CheckBoxList = (props) => {

    const [display, setDisplay] = useState('none')


    const [open, setOpen] = useState(false)
    const {
        options,
        onChange
    } = props

    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setDisplay('none');
            setOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, false);
        document.documentElement.addEventListener('click', handleClickOutside, false);
        return () => {
            document.removeEventListener('click', handleClickOutside, false);
            document.documentElement.removeEventListener('click', handleClickOutside, false);
        }
    }, [ref])

    const handleClick = () => {
        if (open) {
            setOpen(false)
            setDisplay('none')
        } else {
            setOpen(true)
            setDisplay('initial')
        }
    }

    return (
        <div ref={ref} id="checkbox-container">
            <div className='checkbox-button' onClick={handleClick}>&nbsp;&nbsp;&nbsp;&nbsp;-- &nbsp;{(props.cuisinesSelected>0) ?  `${props.cuisinesSelected} Selected`:"Select cuisine types"}&nbsp; --&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div className='checkboxlist' style={{ display }}>
                <label htmlFor="all" className="check-item">
                    <input type='checkbox' id="all" name="all" onChange={onChange} />
                    Select All
                </label>
                {options
                    .map(({ name, value, labelText, checked }) =>
                        <label key={name} htmlFor={name} className="check-item">
                            <input id={name} name={name} type='checkbox' value={value} onChange={onChange} checked={checked} />
                            {labelText}
                        </label>
                    )
                }
            </div>

        </div>


    )
}

export default CheckBoxList