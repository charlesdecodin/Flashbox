import React, { useContext } from 'react'
import Header from '../Header.jsx'
import Input from '../Input.jsx'
import InputListCategories from './InputListCategories.jsx'
import InputListSquad from './InputListSquad.jsx'
import AddButton from './AddButton.jsx'
import CreateNav from './CreateNav.jsx'
import Context from '../../context/context'



export default function AddCardPage() {

    const { server, card, setCard, categories, setCategories, squad, setSquad, squads, setSquads} = useContext(Context)
    
   
    console.log(card);

    const getEval = (e) => {
        console.log(e.target.value);
        setCard({...card, evaluation: e.target.value})
    }

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
                    name="recto"
                    type="text"
                />
                <Input
                    state={card}
                    setState={setCard}
                    placeholder="Verso"
                    name="verso"
                    type="text"
                />
                 <InputListCategories
                    state={categories}
                    setState={setCategories}
                    path="category"
                    secondState={squad}
                    setSecondState={setSquad}
                />

                <InputListSquad/>

                <select onChange={e =>getEval(e)}>
                    <option value="own">Evaluation personnelle</option>
                    <option value="computer">Evaluation ordinateur</option>
                </select>

                <AddButton
                    state={card}
                />
            </div>

        </div>
    )
}
