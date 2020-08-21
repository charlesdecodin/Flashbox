import React, { useContext } from 'react'
import plus from '../../images/plus.svg'
import '../../style/manage/addButton.css'
import Context from '../../context/context'
import { Link } from 'react-router-dom'

export default function AddButton({state, path, setState}) {

    const {server, setValidationMessage, setToggleValidation} = useContext(Context)

    console.log(state.method);
    
    const sendState = async() =>{
        const token = localStorage.getItem('token') || sessionStorage.getItem('token')
 
        const config ={
            headers : { 
                "Content-Type": "application/json",
            },
            method: state.method,
            body: JSON.stringify(state),
        }
        const promise = await fetch(`${server}/${path}`, config)
        const content = await promise.json()
        console.log(content);
        
        setValidationMessage(content);

        if(path === "card"){
             setState({evaluation: 1, method: "POST"})
        }else{
            setState({method: "POST"})
        }
       

        setToggleValidation(true)
        
        setTimeout(()=>{
            setToggleValidation(false)}
            , 1000)
        
          
        

        if(content.validation && path === "category"){
          
            const configLink = {
                headers : { 
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({token: token, content: content})
            }
            const promiseLink = await fetch(`${server}/accountCategory`, configLink)
            console.log(promiseLink);
        }
    }

if(state.method=== "POST"){
     return (
        <img onClick={sendState} className="add-btn" src={plus} alt=""/>
    )
}else if(state.method=== "PUT"){
    return(
        <Link to="/updateCategoriesPage" onClick={sendState} ><img className="add-btn" src={plus} alt=""/></Link>
    )
}
   
}
