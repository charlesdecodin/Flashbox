import React, { useContext } from 'react'
import Header from '../Header.jsx'
import Input from '../Input.jsx'
import AddButton from './AddButton.jsx'
import CreateNav from './CreateNav.jsx'
import Context from '../../context/context'



export default function AddCategoryPage() {

    const { category, setCategory } = useContext(Context)
    console.log(category);
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
                />
            </div>
        </div>
    )
}
