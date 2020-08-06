import React, { useEffect, useContext, useState } from 'react'
import '../style/inputList.css'
import Context from '../context/context'

export default function InputList({state, setState, path}) {
    const {server, squad, setSquad} = useContext(Context)
    
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')

   useEffect(() => {
    const getCategories = async () =>{
        const config = {
            headers : { 
                'x-access-token': token
            },
        }
        const promise = await fetch(`${server}/${path}`, config)
        const content = await promise.json()

        setState(content)
    }
    getCategories()
   }, [])

   const getCategorieId = (e) =>{
 
    const category_id = state.find(element => element.noun === e.target.value)
    setSquad({...squad, category_id: category_id.category_id})

   }
   
    return (
        <select onChange={e =>getCategorieId(e)} className="" name="" id="">
            {state.map((item, index)=>{
                return(
                     <option key={index}>{item.noun}</option>
                )
            })}
        </select>
    )
}
