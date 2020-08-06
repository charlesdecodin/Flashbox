import React from 'react'

export default React.createContext({
    card: "",
    categories: "",
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
    setCategories: (name)=>{},
})