import React, {useContext} from 'react'
import '../../style/home/homeButton.css'
import { Link } from 'react-router-dom'
import Context from '../../context/context'

export default function HomeButton({ buttonValue, link, color, state, path }) {

    const {server} = useContext(Context)

    const fetchAccount = async()=>{
        console.log(state);
        const config = {
            headers : { 
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(state),
        }
        console.log(config.body);
        const promise = await fetch(`${server}/${path}`, config)
        const content = await promise.json()
        console.log(content);
        if (content.token && content.connect){
            localStorage.setItem('token', content.token)
            window.location.href = "main"
        }else if(content.token){
            sessionStorage.setItem('token', content.token)
            window.location.href = "main"
        }

    }

    const handleInput = () => {
        if(state){
          fetchAccount()
        }
    }

    return (
        <Link to={link?`${link}`:window.location.pathname}>
         <button  onClick={handleInput} className="home-button" style={{color: color}}>{buttonValue}</button>
        </Link>
    )
}
