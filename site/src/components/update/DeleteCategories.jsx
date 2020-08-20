import React, {useContext} from 'react'
import trash from '../../images/trash.svg'
import Context from '../../context/context'

export default function DeleteCategories({index}) {
    const { server, categories, setValidationMessage} = useContext(Context)

    
    const deleteCategorie = async (index) => { 

        const config = {
            method: "delete",
        }

        const promise = await fetch(`${server}/category/${categories[index].category_id}`, config)
        const content = await promise.json()
        setValidationMessage(content.message)

    }
    
    return (
        <img onClick={()=>{deleteCategorie(index, server, categories)}} src={trash} alt="" /> 
    )
}
