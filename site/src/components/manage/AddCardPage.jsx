import React, { useContext, useEffect } from 'react'
import Header from '../Header.jsx'
import Input from '../Input.jsx'
import InputList from '../InputListCategories.jsx'
import AddButton from './AddButton.jsx'
import CreateNav from './CreateNav.jsx'
import Context from '../../context/context'



export default function AddCardPage() {

    const { server, card, setCard, categories, setCategories, squad, setSquad, squads, setSquads} = useContext(Context)
        console.log(squad);
    useEffect(()=>{
        const getSquads = async () =>{
            const config = {
                headers : {
                    'content-type': 'application/json',
                },
                method: 'get'
            }
            const promise = await fetch(`${server}/squad/${squad.parent.category_id}`, config)
            const content = await promise.json()
            console.log(content);
        }
        if(squad && squad.parent && squad.parent.category_id){
            getSquads() 
        }
       
    },[squad])

    console.log(squad);

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
                 <InputList 
                    state={categories}
                    setState={setCategories}
                    path="category"
                    secondState={squad}
                    setSecondState={setSquad}
                />

                <AddButton
                    state={card}
                />
            </div>

        </div>
    )
}
