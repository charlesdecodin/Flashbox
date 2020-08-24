import React, { useEffect, useContext, useState} from 'react'
import Context from '../../context/context'

export default function InputListSquad() {

    const [squadsByCategories, setSquadsByCategories] = useState([])
    const { server, squad, card, setCard} = useContext(Context)
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

            setSquadsByCategories(content)
        }
        if(squad && squad.parent && squad.parent.category_id){
            getSquads() 
        }
       
    },[squad, server])

    const getId = (e) =>{
    
        const parent = squadsByCategories.find(element => element.noun === e.target.value)
        if(parent){
            setCard({...card, parent: parent.squad_id})
        }
        

    }


    return (
        <select onChange={e => getId(e)}>
            <option value="">Section</option>
            {squadsByCategories.map((item, index)=>{
                return(
                     <option key={index}>{item.noun}</option>
                )
            })}
        </select>
    )
}
