import React, {useContext, useState} from 'react'
import plus from '../../images/plus.svg'
import '../../style/manage/addButton.css'
import Context from '../../context/context'

export default function AddButton({state, path}) {

    const {server} = useContext(Context)
    
    const sendState = async() =>{
        const token = localStorage.getItem('token') || sessionStorage.getItem('token')
        console.log(state);
        const config ={
            headers : { 
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(state),
        }
        const promise = await fetch(`${server}/${path}`, config)
        const content = await promise.json()
        console.log(content);

        if(content && path === "category"){
            console.log('hello');
            const configLink = {
                headers : { 
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({token: token, content: content})
            }
            const promise = await fetch(`${server}/accountCategory`, configLink)

        }
    }


    return (
        <img onClick={sendState} className="add-btn" src={plus} alt=""/>
    )
}
