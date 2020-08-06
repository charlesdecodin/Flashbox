import React, { useEffect, useContext, useState } from 'react'
import '../style/inputList.css'
import Context from '../context/context'

export default function InputList({state, setState, path, value}) {
    const {server} = useContext(Context)
    
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
        console.log(content);
        setState(content)
    }
    getCategories()
   }, [])
   console.log(state);
   
    return (
        <select className="" name="" id="">
            {state.map((item, index)=>{
                return(
                     <option key={index}>{item.noun}</option>
                )
            })}
        </select>
    )
}
