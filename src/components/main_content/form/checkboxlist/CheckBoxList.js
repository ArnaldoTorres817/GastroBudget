import React, { useState } from 'react'
import './CheckBoxList.css'


const CheckBoxList = (props) => {

    const [visibleList, setVisibleList] = useState(false)
    const {
        options,
        onChange
    } = props

    return (
        <div id="checkbox-container">
            <div className='checkbox-button' onClick={() => setVisibleList(!visibleList)}>&nbsp;&nbsp;&nbsp;&nbsp;-- &nbsp;Select cuisine types&nbsp; --&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div className='checkboxlist' style={visibleList ? { display: "initial" } : { display: "none" }}>
                <div className="check-item">
                    <input type='checkbox' id="all" name="all" onChange={onChange} />
                    <label htmlFor="all">&nbsp;&nbsp;Select All</label>
                </div>


                {options
                    .map(item => {
                        const {
                            name,
                            value,
                            labelText,
                            checked,
                        } = item

                        return (
                            <div className="check-item" key={name}>
                                <input id={name} name={name} type='checkbox' value={value} onChange={onChange} checked={checked} />
                                <label htmlFor={name}>&nbsp;&nbsp;{labelText}</label>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default CheckBoxList