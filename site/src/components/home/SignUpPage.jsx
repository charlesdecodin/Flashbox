import React from 'react'
import Input from '../Input.jsx'
import HomeButton from './HomeButton.jsx'

export default function SignUp() {
    return (
        <div className="sign-home signUp-home">
            <h1 className="title-home">FLASHBOX</h1>
             <div className="form">
                <Input
                    placeholder="Prénom"
                />
                <Input
                    placeholder="Nom"
                />
                <Input
                    placeholder="Email"
                />
                <Input
                    placeholder="Mot de passe"
                />
                <Input
                    placeholder="Confirmer Mot de passe"
                />
                  <HomeButton
                    buttonValue="S'inscrire"
                    link="home"
                    color="#82E2CB"
                />
            </div>
        </div>
    )
}
