import React, { useEffect, useContext } from 'react'
import '../style/inputList.css'
import Context from '../context/context'


export default function InputList({state, setState, path, secondState, setSecondState}) {
    const { server } = useContext(Context)
    
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')

   useEffect(() => {
    const getData = async () =>{

        const config = {
            headers : { 
                'x-access-token': token
            },
        }
        
        const promise = await fetch(`${server}/${path}`, config)
        const content = await promise.json()
        
        setState(content)
        setSecondState({...secondState, parent: content[content.length-1]})
    }
    getData()
   }, [path, server, setState, token])

   const getId = (e) =>{

    const parent = state.find(element => element.noun === e.target.value)
    setSecondState({...secondState, parent: parent})

   }
   
    return (
        <select onChange={e =>getId(e)} className="" name="" id="" value={secondState && secondState.parent && secondState.parent.noun}>
            {state.map((item, index)=>{
                return(
                     <option key={index}>{item.noun}</option>
                )
            })}
        </select>
    )
}
