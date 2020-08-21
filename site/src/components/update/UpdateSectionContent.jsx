import React,{useEffect, useContext} from 'react'
import Context from '../../context/context'
import '../../style/update/updateCategoriesContent.css'
import {Link} from "react-router-dom"
import UpdateDelete from "./UpdateDelete.jsx"
import ButtonUpdateDelete from './ButtonUpdateDelete.jsx'

export default function UpdateSectionContent() {

    const {server, squad, squads, setSquads, toggleUpdate, setToggleUpdate, validationMessage, setSquad, setCard, card}= useContext(Context)
   
    useEffect(()=>{
        console.log(squad);
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
            setSquads(content);
        }

        if(squad && squad.parent && squad.parent.category_id){
            getSquads() 
        }
       
    },[squad, server, validationMessage])

    console.log(squads);

    const getId = (item) =>{
        setCard({
            ...card,
             parent: item
        })
        }

    return (
        <div className="container-categories">
           {squads.map((item, index) =>{
               return(
                   <div className="container-category" key={index}>
                       <Link  to="/updateCardPage" onClick={()=>getId(item)} >
                       <p>{item.noun.toUpperCase()}</p>
                       </Link>
                       <ButtonUpdateDelete
                        item={item}
                        />
                       <UpdateDelete
                       toggleUpdate={toggleUpdate}
                       item={item}
                       index={index}
                       state={squads}
                       setState={setSquad}
                       property="squad_id"
                       path="squad"
                       link="/addSquad"
                       />
                   </div>
               )
           })}
        </div>
    )
}
