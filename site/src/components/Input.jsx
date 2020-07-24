import React from 'react'
import '../style/input.css'

export default function Input({placeholder}) {
    return (
        <input className="main-input" type="text" placeholder={placeholder}/>
    )
}
