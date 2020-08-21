import React, {useContext} from 'react'
import trash from '../../images/trash.svg'
import Context from '../../context/context'

export default function Delete({index, state, property, path}) {
    const { server, setValidationMessage} = useContext(Context)
    
    const deleteCategorie = async (index) => { 

        const config = {
            method: "delete",
        }

        const promise = await fetch(`${server}/${path}/${state[index][property]}`, config)
        const content = await promise.json()
        setValidationMessage(content)

    }
    
    return (
        <img onClick={()=>{deleteCategorie(index)}} src={trash} alt="" /> 
    )
}
