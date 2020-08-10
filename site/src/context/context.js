import React from 'react'

export default React.createContext({
    card: "",
    categories: "",
    squad: "",
    squads: "",
    category: "",
    toggleProfilNav: "",
    server: "", 
    toggleNav: "",
    setToggleNav: (name)=>{},
    setToggleProfilNav: (name)=>{},
    setCategory: (name)=>{},
    setSquad: (name)=>{},
    setSquads: (name)=>{},
    setCard: (name)=>{},
    setCategories: (name)=>{},
})