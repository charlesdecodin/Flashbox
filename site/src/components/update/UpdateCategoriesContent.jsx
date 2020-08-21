import React, { useContext, useEffect, useState} from 'react'
import Context from '../../context/context'
import '../../style/update/updateCategoriesContent.css'
import UpdateDelete from './UpdateDelete.jsx'
import ButtonUpdateDelete from './ButtonUpdateDelete.jsx'
import {Link} from "react-router-dom"


export default function UpdateContent({}) {

    const { server, setCategories, categories, validationMessage, setCategory, setSquad, squad, toggleUpdate, setToggleUpdate} = useContext(Context)
    

    const token = localStorage.getItem('token') || sessionStorage.getItem('token')

   

    const hideUpdateBtn = (item) =>{
        setToggleUpdate({
            ...toggleUpdate,
            [item.noun] : false,
        })
    }

    const test = (index) => {
        setCategory({...categories[index], method:"PUT"})
    }
    
    useEffect(() => {

        const getData = async () => {

            const config = {
                headers: {
                    'x-access-token': token
                },
            }

            const promise = await fetch(`${server}/category`, config)
            const content = await promise.json()

            setCategories(content)
        }

        getData()

    }, [validationMessage, server, setCategories, token])

    const getId = (item) =>{
    
    setSquad({
        ...squad,
        parent: item
    })
    }

    return (
        <div className="container-categories">
            {categories.map((item, index) => {
                return (

                    <div key={index} className="container-category" onClick={()=>{hideUpdateBtn(item)}}>
                        <Link to="/updateSectionPage" onClick={()=>getId(item)} >
                        <p>{item.noun.toUpperCase()}</p>  
                        </Link>
                        <ButtonUpdateDelete
                        item={item}
                        />
                        <UpdateDelete
                        toggleUpdate={toggleUpdate}
                        item={item}
                        index={index}
                        state={categories}
                        property={"category_id"}
                        path={"category"}
                        />   
                    </div>
                    
                )
            })}
        </div>
    )
}
