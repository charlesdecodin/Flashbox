import React, {useContext} from 'react'
import '../style/main/header.css'
import menu from "../images/menu-button.svg"
import Navbar from "./Navbar.jsx"
import Context from '../context/context'
import ProfilNav from './ProfilNav'

export default function Header() {

    const {setToggleNav, toggleNav, setToggleProfilNav} = useContext(Context)

    const handlerNav = ()=>{
        setToggleNav(!toggleNav)
        setToggleProfilNav(false)
    }

    return (
        <header className="header-main">
            <div className="container-title">
              <h1 className="title-main">FLASHBOX</h1>
            <img onClick={handlerNav} src={menu} alt=""/>  
            </div>
            <Navbar/>
            <ProfilNav/>
        </header>
    )
}
