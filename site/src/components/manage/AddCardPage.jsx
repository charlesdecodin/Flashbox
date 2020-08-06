import React, { useContext } from 'react'
import Header from '../Header.jsx'
import Input from '../Input.jsx'
import InputList from '../InputList.jsx'
import AddButton from './AddButton.jsx'
import CreateNav from './CreateNav.jsx'
import Context from '../../context/context'



export default function AddCardPage() {

    const { card, setCard } = useContext(Context)

    return (
        <div>
            <Header />
            <CreateNav
                focus='card'
            />
            <div className='form'>
                <Input
                    state={card}
                    setState={setCard}
                    placeholder="Recto"
                    name="name"
                    type="text"
                />
                <Input
                    state={card}
                    setState={setCard}
                    placeholder="Verso"
                    name="name"
                    type="text"
                />
               
                <AddButton
                    state={card}
                />
            </div>

        </div>
    )
}
