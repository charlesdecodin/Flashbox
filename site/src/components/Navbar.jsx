import React, {useContext} from 'react'
import home from '../images/home.svg'
import play from '../images/play.svg'
import plus from '../images/plus.svg'
import update from '../images/update.svg'
import store from '../images/store.svg'
import profil from '../images/profil.svg'
import '../style/main/navbar.css'
import Context from '../context/context'
import { Link } from 'react-router-dom'


export default function Navbar() {

    const {toggleNav, toggleProfilNav ,setToggleProfilNav, setSquad, setCategory, squad} = useContext(Context)

    const handlerProfilNav = ()=>{
        setToggleProfilNav(!toggleProfilNav)
    }
    
    const resetMethod = () => { 
        setSquad({
            method:'POST'
        })
        setCategory({
            method:'POST'
        })

    }

    return (
        <nav className="navbar" style={toggleNav? {marginTop: "-16px", zIndex: "3", boxShadow: "0px 1px 10px 1px #20232a" }: {marginTop:"-65px", zIndex: "1"}}>
           <ul className="list-navbar">
               <li><img src={home} alt=""/></li>
               <li> <Link to="/playPage"><img src={play} alt=""/></Link> </li>
               <li><Link  onClick={resetMethod} to="/add"><img src={plus} alt=""/></Link></li>
               <li><Link to="/updateCategoriesPage"><img src={update} alt=""/></Link></li>
               <li><img src={store} alt=""/></li>
               <li onClick={handlerProfilNav}><img src={profil} alt=""/></li>
           </ul>
           
        </nav>
    )
}
