import React from 'react'
import './CheckBoxList.css'

const CheckBoxList = (props) => {

    const {
        options,
        onChange
    } = props

    return (
        <div className='checkboxlist'>
            <span>Select cuisine types</span>
            {options
                .map(item => {
                    const {
                        name,
                        value,
                        labelText,
                        checked,
                    } = item

                    return (
                        <div key={name}>
                            <input id={name} name={name} type='checkbox' value={value} onChange={onChange} checked={checked} />
                            <label htmlFor={name}>{labelText}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CheckBoxList