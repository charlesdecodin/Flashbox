import React, {useContext} from 'react'
import '../style/profilNav.css'
import Context from '../context/context'
import { Link } from 'react-router-dom'

export default function ProfilNav() {

    const {toggleProfilNav} = useContext(Context)

    const logout = () => {
        localStorage.clear()
        sessionStorage.clear()
    }

    return (
        <ul className= "profil-nav" style={toggleProfilNav?{marginTop:"-16px"}:{marginTop:"-180px"}}>
            <li>Préférences</li>
            <li>Contactez-nous</li>
            <li>Changer de mot de passe</li>
            <li onClick={logout}><Link to="/home">Se déconnecter</Link></li>
        </ul>
    )
}
