import React from 'react'
import '../../style/manage/createNav.css'
import { Link } from 'react-router-dom'

export default function CreateNav({focus}) {
    return (
        <nav className="nav-create">
            <ul>
                <li><Link style={focus==="category"?{color:'#82E2CB'}:{color:'#C5C5C5'}} to="/add">Catégorie</Link></li>
                <li><Link style={focus==="squad"?{color:'#82E2CB'}:{color:'#C5C5C5'}} to="/addSquad">Section</Link></li>
                <li><Link style={focus==="card"?{color:'#82E2CB'}:{color:'#C5C5C5'}} to="/addCard" >Carte</Link></li>
            </ul>
        </nav>
    )
}
