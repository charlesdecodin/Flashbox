import React from 'react'

export default React.createContext({
    card: "",
    squad: "",
    category: "",
    toggleProfilNav: "",
    server: "", 
    toggleNav: "",
    setToggleNav: (name)=>{},
    setToggleProfilNav: (name)=>{},
    setCategory: (name)=>{},
    setSquad: (name)=>{},
    setCard: (name)=>{},
})