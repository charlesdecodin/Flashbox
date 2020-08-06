import React, { useContext } from 'react'
import plus from '../../images/plus.svg'
import '../../style/manage/addButton.css'
import Context from '../../context/context'

export default function AddButton({state, path}) {

    const {server} = useContext(Context)
    
    const sendState = async() =>{
        const token = localStorage.getItem('token') || sessionStorage.getItem('token')
 
        const config ={
            headers : { 
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(state),
        }
        const promise = await fetch(`${server}/${path}`, config)
        const content = await promise.json()
  

        if(content && path === "category"){
          
            const configLink = {
                headers : { 
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({token: token, content: content})
            }
            const promiseLink = await fetch(`${server}/accountCategory`, configLink)
        }
    }


    return (
        <img onClick={sendState} className="add-btn" src={plus} alt=""/>
    )
}
