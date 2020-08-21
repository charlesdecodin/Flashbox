import React from 'react'
import '../style/input.css'

export default function Input({ placeholder, setState, name, state, type, value }) {

    const handleValue = (e) => {
        //change value if input type is text
        if (type === "text") {
            setState({
                ...state,
                [name]: e.target.value
            })
        //change value if input type is checkbox
        } else if (type === "checkbox") {
            //verify if value is already register then reverse
                setState({
                    ...state,
                    [name]: !state.connect
                })
        }
    }

    return (
        <input onChange={handleValue} type={type} placeholder={placeholder} value={value? value : ""} />
    )
}
