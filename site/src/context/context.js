import React from 'react'

export default React.createContext({
    toggleValidation: "",
    card: "",
    validationMessage: "",
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
    setValidationMessage: (name)=>{},
    setToggleValidation: (name)=>{},
})