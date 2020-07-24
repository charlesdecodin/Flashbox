import React from 'react'
import HomeButton from './HomeButton.jsx'
import Input from '../Input.jsx'
import '../../style/home/sign.css'
import '../../style/home/home.css'

export default function LoginPage() {
    return (
        <div className="sign-home login-home">
            <h1 className="title-home">FLASHBOX</h1>
            <div className="form">
                <Input
                    placeholder="Email"
                />
                <Input
                    placeholder="Mot de passe"
                />
            </div>

            <HomeButton
                buttonValue="Se connecter"
                link="home"
                color="#57E2E8"
            />

        </div>
    )
}
