import React,{useEffect, useContext} from 'react'
import Context from '../../context/context'
import '../../style/update/updateCategoriesContent.css'
import {Link} from "react-router-dom"
import UpdateDelete from "./UpdateDelete.jsx"
import ButtonUpdateDelete from './ButtonUpdateDelete.jsx'

export default function UpdateSectionContent() {

    const {server, squad, squads, setSquads, toggleUpdate, setToggleUpdate, validationMessage}= useContext(Context)
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
            setSquads(content);
            
        }

        if(squad && squad.parent && squad.parent.category_id){
            getSquads() 
        }
       
    },[squad, server, validationMessage])


    console.log(squads);
    return (
        <div className="container-categories">
           {squads.map((item, index) =>{
               return(
                   <div className="container-category" key={index}>
                       <Link >
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
                       property="squad_id"
                       path="squad"
                       link=""
                       />
                   </div>
               )
           })}
        </div>
    )
}
