import React from 'react'
import HomeButton from './HomeButton.jsx'

export default function HomePage() {
    return (
        <div className="sign-home home">
            <h1 className="title-home">FLASHBOX</h1>
            <div className="group-button">
                <HomeButton
                    buttonValue="Se connecter"
                    link="signIn"
                    color="#57E2E8"
                />
                <HomeButton
                    buttonValue="S'inscrire"
                    link="signUp"
                    color="#82E2CB"
                />
            </div>

        </div>
    )
}
