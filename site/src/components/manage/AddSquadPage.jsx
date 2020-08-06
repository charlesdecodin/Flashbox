import React, { useContext } from 'react'
import Header from '../Header.jsx'
import Input from '../Input.jsx'
import InputList from '../InputList.jsx'
import AddButton from './AddButton.jsx'
import CreateNav from './CreateNav.jsx'
import Context from '../../context/context'



export default function AddSquadPage() {

    const { squad, setSquad } = useContext(Context)

    return (
        <div>
            <Header />
            <CreateNav
                focus='squad'
            />
            <div className='form'>
                <Input
                    state={squad}
                    setState={setSquad}
                    placeholder="Nom"
                    name="name"
                    type="text"
                />
                <InputList />
                <AddButton
                    state={squad}
                />
            </div>

        </div>
    )
}