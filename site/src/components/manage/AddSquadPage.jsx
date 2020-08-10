import React, { useContext } from 'react'
import Header from '../Header.jsx'
import Input from '../Input.jsx'
import InputListCategories from './InputListCategories.jsx'
import AddButton from './AddButton.jsx'
import CreateNav from './CreateNav.jsx'
import Context from '../../context/context'
import ValidationMessage from './ValidationMessage.jsx'



export default function AddSquadPage() {

    const { squad, setSquad, categories, setCategories } = useContext(Context)

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
                <InputListCategories
                    state={categories}
                    setState={setCategories}
                    secondState={squad}
                    setSecondState={setSquad}
                    path="category"
                    value="category_name"
                />
                <AddButton
                    state={squad}
                    path="squad"
                />
                <ValidationMessage/>
            </div>


        </div>
    )
}