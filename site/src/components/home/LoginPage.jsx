import React, { useState } from 'react'
import HomeButton from './HomeButton.jsx'
import Input from '../Input.jsx'
import '../../style/home/sign.css'
import '../../style/home/home.css'

export default function LoginPage() {

    const [login, setLogin]= useState({}) 

    return (
        <div className="sign-home login-home">
            <h1 className="title-home">FLASHBOX</h1>
            <div className="form">
                <Input
                    placeholder="Email"
                    setState={setLogin}
                    state = {login}
                    name="email"
                    type="text"
                />
                <Input
                    placeholder="Mot de passe"
                    setState={setLogin}
                    state = {login}
                    name="password"
                    type="text"
                />
                <div>
                  <Input
                    setState={setLogin}
                    state = {login}
                    name="connect"
                    type="checkbox"
                  />
                  <label htmlFor="">Rester connecté</label>  
                </div>
            </div>

            <HomeButton
                buttonValue="Se connecter"
                color="#57E2E8"
                state={login}
                path= "login"
            />

        </div>
    )
}
