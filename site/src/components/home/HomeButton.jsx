import React from 'react'
import '../../style/home/homeButton.css'
import { Link } from 'react-router-dom'

export default function HomeButton({buttonValue, link, color}) {
    return (
        <Link to={`/${link}`} >
         <button className="home-button" style={{color: color}}>{buttonValue}</button>
        </Link>
       
    )
}
