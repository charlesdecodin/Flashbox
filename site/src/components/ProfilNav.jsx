import React, {useContext} from 'react'
import '../style/profilNav.css'
import Context from '../context/context'

export default function ProfilNav() {

    const {toggleProfilNav} = useContext(Context)

    return (
        <ul className= "profil-nav" style={toggleProfilNav?{marginTop:"-16px"}:{marginTop:"-180px"}}>
            <li>Préférences</li>
            <li>Contactez-nous</li>
            <li>Changer de mot de passe</li>
            <li>Se déconnecter</li>
        </ul>
    )
}
