import React,{useEffect, useContext} from 'react'
import Context from '../../context/context'
import '../../style/update/updateCategoriesContent.css'
import {Link} from "react-router-dom"

export default function UpdateSectionContent() {

    const {server, squad, squads, setSquads }= useContext(Context)
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
       
    },[squad, server])


    console.log(squads);
    return (
        <div className="container-categories">
           {squads.map((item, index) =>{
               return(
                   <div className="container-category" key={index}>
                       <Link >
                       <p>{item.noun.toUpperCase()}</p>
                       </Link>
                       
                   </div>
               )
           })}
        </div>
    )
}
