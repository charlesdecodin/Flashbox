import React, { useContext, useEffect, useState} from 'react'
import Context from '../../context/context'
import '../../style/update/updateCategoriesContent.css'
import cog from '../../images/cog.svg'
import trash from '../../images/trash.svg'
import update from '../../images/update.svg'

export default function UpdateContent() {

    const { server, setCategories, categories } = useContext(Context)
    const [toggleUpdate, setToggleUpdate] = useState(false)

    const token = localStorage.getItem('token') || sessionStorage.getItem('token')

    const showUpdateBtn = (e, item) => {
        e.stopPropagation(); 
        setToggleUpdate({
            ...toggleUpdate,
            [item.noun] : true,
        })
    }

    const hideUpdateBtn = (item) =>{
        setToggleUpdate({
            ...toggleUpdate,
            [item.noun] : false,
        })
    }

    const deleteCategorie = async (index) => { 

        console.log(categories[index]);
        const config = {
            method: "delete",
        }

        const promise = await fetch(`${server}/category/${categories[index].category_id}`, config)
        const content = await promise.json()
        console.log(content);

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

    }, [deleteCategorie])

    console.log(toggleUpdate);

    return (
        <div className="container-categories">
            {categories.map((item, index) => {
                return (

                    <div key={index} className="container-category" onClick={()=>{hideUpdateBtn(item)}}>
                        <p>{item.noun}</p>
                        <img style={toggleUpdate[item.noun]?{display: "none"}:{display: "block"}} src={cog} alt="" onClick={(e)=>{showUpdateBtn(e, item)}}/>
                        <div style={toggleUpdate[item.noun]?{display: "block"}:{display: "none"}} >
                            <img onClick={()=>{deleteCategorie(index)}} src={trash} alt="" />
                            <img src={update} alt="" />
                        </div>
                    </div>


                )
            })}
        </div>
    )
}
