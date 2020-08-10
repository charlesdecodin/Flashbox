import React, { useState } from 'react'
import Input from '../Input.jsx'
import HomeButton from './HomeButton.jsx'

export default function SignUp() {

    const [account, setAccount] = useState({})

    return (
        <div className="sign-home signUp-home">
            <h1 className="title-home">FLASHBOX</h1>
             <div className="form">
                <Input
                    placeholder="Prénom"
                    setState={setAccount}
                    state = {account}
                    name="first_name"
                    type="text"
                    value={account.first_name}
                />
                <Input
                    placeholder="Nom"
                    setState={setAccount}
                    state = {account}
                    name="last_name"
                    type="text"
                    value={account.last_name}
                />
                <Input
                    placeholder="Email"
                    setState={setAccount}
                    state = {account}
                    name="email"
                    type="text"
                    value={account.email}
                />
                <Input
                    placeholder="Mot de passe"
                    setState={setAccount}
                    state = {account}
                    name="password"
                    type="text"
                    value={account.password}
                />
                <Input
                    placeholder="Confirmer Mot de passe"
                    setState={setAccount}
                    state = {account}
                    name="confirm_password"
                    type="text"
                    value={account.confirm_password}
                />
                  <HomeButton
                    buttonValue="S'inscrire"
                    color="#82E2CB"
                    state = {account}
                    path = "account"
                />
            </div>
        </div>
    )
}
