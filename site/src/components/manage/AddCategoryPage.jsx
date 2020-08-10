import React, { useContext } from 'react'
import Header from '../Header.jsx'
import Input from '../Input.jsx'
import AddButton from './AddButton.jsx'
import CreateNav from './CreateNav.jsx'
import Context from '../../context/context'
import ValidationMessage from './ValidationMessage.jsx'



export default function AddCategoryPage() {

    const { category, setCategory } = useContext(Context)
   
    return (
        <div>
            <Header />
            <CreateNav
                focus='category'
            />
            <div className='form'>
                <Input
                    state={category}
                    setState={setCategory}
                    placeholder="Nom"
                    name="name"
                    type="text"
                />
                <AddButton
                    state={category}
                    path="category"
                />

                <ValidationMessage/>

            </div>
        </div>
    )
}
