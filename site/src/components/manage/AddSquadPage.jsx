import React, { useContext } from 'react'
import Header from '../Header.jsx'
import Input from '../Input.jsx'
import InputListCategories from './InputListCategories.jsx'
import AddButton from './AddButton.jsx'
import CreateNav from './CreateNav.jsx'
import Context from '../../context/context'
import ValidationMessage from './ValidationMessage.jsx'



export default function AddSquadPage() {

    const { squad, setSquad, categories, setCategories} = useContext(Context)
 
    console.log(squad);
    return (
        <div>
            <Header />
            {squad.method === "PUT"? "" :<CreateNav focus='squad'/>}
          
            <div className='form'>
                <Input
                    state={squad}
                    setState={setSquad}
                    placeholder="Nom"
                    name="noun"
                    type="text"
                    value={squad.noun}
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
                    setContentState={setSquad}
                    setState={setSquad}
                />
                <ValidationMessage/>
            </div>


        </div>
    )
}